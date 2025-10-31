import express from "express";
import Consultation from "../models/Consultation.js";
import { appendToSheet } from "../services/googleSheets.js";
import { sendGmailViaAPI } from "../services/gmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      projectDetails,
      callTime,
      contactMethod,
    } = req.body;

    if (!fullName || !email || !service || !contactMethod) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const consultation = new Consultation({
      fullName,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      projectDetails,
      callTime,
      contactMethod,
    });
    await consultation.save();

    const sheetValues = [
      fullName,
      email,
      company || "",
      phone || "",
      service,
      budget || "",
      timeline || "",
      projectDetails || "",
      callTime || "",
      contactMethod,
      new Date().toISOString(),
    ];
    await appendToSheet("consulting", sheetValues);

    const rows = [
      ["Name", fullName],
      ["Email", email],
      ["Company", company || "N/A"],
      ["Phone", phone || "N/A"],
      ["Service", service],
      ["Budget", budget || "N/A"],
      ["Timeline", timeline || "N/A"],
      ["Project Details", projectDetails || "N/A"],
      ["Preferred Call Time", callTime || "N/A"],
      ["Contact Method", contactMethod],
    ];

    const adminHtml = (await import("../services/gmail.js")).buildHtmlTemplate
      ? (await import("../services/gmail.js")).buildHtmlTemplate({ title: "New Consultation Request", introLines: [], rows, logoUrl: "https://loopera.tech/logo-1.png" })
      : `<div>${rows.map(r => `<p><strong>${r[0]}:</strong> ${r[1]}</p>`).join("")}</div>`;

    const userHtml = (await import("../services/gmail.js")).buildHtmlTemplate
      ? (await import("../services/gmail.js")).buildHtmlTemplate({ title: "Consultation Request Received", introLines: [`Hi ${fullName},`, "We’ve received your consultation request. Our team will reach out soon."], rows: [["Service", service], ["Preferred Contact", contactMethod]], logoUrl: "https://loopera.tech/logo-1.png" })
      : `<p>Hi ${fullName}, thanks. We got your consultation request.</p>`;

    await sendGmailViaAPI({ to: process.env.REPLY_TO_EMAIL || process.env.SENDER_EMAIL, subject: "New Consultation Request", html: adminHtml, logoUrl: "https://loopera.tech/logo-1.png" });
    await sendGmailViaAPI({ to: email, subject: "Consultation Request Received", html: userHtml, logoUrl: "https://loopera.tech/logo-1.png" });

    res.json({ success: true, message: "Consultation request submitted successfully", data: consultation });
  } catch (err) {
    console.error("Error in consultation route:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
