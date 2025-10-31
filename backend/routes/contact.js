import express from "express";
import Contact from "../models/Contact.js";
import { appendToSheet } from "../services/googleSheets.js";
import { sendGmailViaAPI } from "../services/gmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      services,
      details,
      contactMode,
      phoneNumber,
      preferredEmail,
      meetingLink,
    } = req.body;

    if (!name || !email || !details || !contactMode) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const contact = new Contact({
      name,
      email,
      company,
      services,
      details,
      contactMode,
      phoneNumber,
      preferredEmail,
      meetingLink,
    });
    await contact.save();

    const sheetValues = [
      name,
      email,
      company || "",
      Array.isArray(services) ? services.join(", ") : services || "",
      details,
      contactMode,
      phoneNumber || "",
      preferredEmail || email,
      meetingLink || "",
      new Date().toISOString(),
    ];
    await appendToSheet("contact", sheetValues);

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Company", company || "N/A"],
      ["Services", Array.isArray(services) ? services.join(", ") : services || "N/A"],
      ["Details", details],
      ["Contact Mode", contactMode],
      ["Phone", phoneNumber || "N/A"],
      ["Preferred Email", preferredEmail || email],
      ["Meeting Link", meetingLink || "N/A"],
    ];

    const adminHtml = (await import("../services/gmail.js")).buildHtmlTemplate
      ? (await import("../services/gmail.js")).buildHtmlTemplate({ title: "New Contact Form Submission", introLines: [], rows, logoUrl: "https://loopera.tech/logo-1.png" })
      : `<div>${rows.map(r => `<p><strong>${r[0]}:</strong> ${r[1]}</p>`).join("")}</div>`;

    const userHtml = (await import("../services/gmail.js")).buildHtmlTemplate
      ? (await import("../services/gmail.js")).buildHtmlTemplate({ title: "Thanks for contacting Loopera", introLines: [`Hi ${name},`, "We’ve received your message and will get back to you shortly."], rows: [["Message", details], ["Contact Mode", contactMode]], logoUrl: "https://loopera.tech/logo-1.png" })
      : `<p>Hi ${name}, thanks. We got your message.</p>`;

    // send admin and user emails
    await sendGmailViaAPI({ to: process.env.REPLY_TO_EMAIL || process.env.SENDER_EMAIL, subject: "New Contact Form Submission", html: adminHtml, logoUrl: "https://loopera.tech/logo-1.png" });
    await sendGmailViaAPI({ to: email, subject: "We Received Your Message", html: userHtml, logoUrl: "https://loopera.tech/logo-1.png" });

    res.json({ success: true, message: "Contact form submitted successfully", data: contact });
  } catch (err) {
    console.error("Error in contact route:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
