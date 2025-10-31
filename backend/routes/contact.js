

import express from "express";
import Contact from "../models/Contact.js";
import { appendToSheet } from "../services/googleSheets.js";
import { sendGmailViaAPI } from "../services/gmail.js";
import { buildHtmlTemplate } from "../services/buildHtmlTemplate.js";

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
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    // Save to MongoDB
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

    // Push to Google Sheet
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

    // Build email rows
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

    // Admin email
    const adminHtml = buildHtmlTemplate({
      title: "New Contact Form Submission",
      introLines: [],
      rows,
      logoUrl: "https://loopera.tech/logo-1.png",
    });

    // User confirmation email
    const userHtml = buildHtmlTemplate({
      title: "Thanks for contacting Loopera",
      introLines: [
        `Hi ${name},`,
        "We’ve received your message and will get back to you shortly.",
      ],
      rows: [
        ["Message", details],
        ["Contact Mode", contactMode],
      ],
      logoUrl: "https://loopera.tech/logo-1.png",
    });

    // Send emails
    await sendGmailViaAPI({
      to: process.env.REPLY_TO_EMAIL || process.env.SENDER_EMAIL,
      subject: "New Contact Form Submission",
      html: adminHtml,
    });

    await sendGmailViaAPI({
      to: email,
      subject: "We Received Your Message",
      html: userHtml,
    });

    res.json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (err) {
    console.error("Error in contact route:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
