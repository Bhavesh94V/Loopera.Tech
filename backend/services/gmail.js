// import fs from "fs";
// import path from "path";
// import { google } from "googleapis";
// import dotenv from "dotenv";

// dotenv.config();

// const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");
// const TOKEN_PATH = path.join(process.cwd(), "token.json");


// function loadJSON(filePath) {
//   try {
//     return JSON.parse(fs.readFileSync(filePath, "utf-8"));
//   } catch (err) {
//     throw new Error(`Unable to read JSON file at ${filePath}: ${err.message}`);
//   }
// }

// function buildHtmlTemplate({ title, introLines = [], rows = [], logoUrl }) {
//   const primary = "#1e90ff";
//   const dark = "#0f172a";
//   const rowsHtml = rows
//     .map(
//       ([label, value]) =>
//         `<tr><td style="padding:8px 12px;font-weight:600;background:#f7fafc;border-bottom:1px solid #eee;width:170px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${value || ""}</td></tr>`
//     )
//     .join("");
//   return `<!doctype html>
//   <html>
//     <head><meta charset="utf-8"/></head>
//     <body style="font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f4f6f8;margin:0;padding:24px;">
//       <div style="max-width:680px;margin:0 auto;">
//         <div style="background:white;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
//           <div style="padding:20px 24px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #eef2f7;">
//             <img src="${logoUrl}" alt="Loopera" style="height:40px;object-fit:contain"/>
//             <div style="margin-left:auto;color:${dark};font-weight:700">${title}</div>
//           </div>
//           <div style="padding:20px 24px;color:${dark};">
//             ${introLines.map(l => `<p style="margin:8px 0">${l}</p>`).join("")}
//             <div style="margin-top:16px;border-radius:8px;overflow:hidden;border:1px solid #eee">
//               <table style="width:100%;border-collapse:collapse">
//                 ${rowsHtml}
//               </table>
//             </div>
//             <p style="margin-top:18px;color:#6b7280;font-size:13px">Best regards,<br/>Loopera Tech Team</p>
//           </div>
//         </div>
//       </div>
//     </body>
//   </html>`;
// }

// export const sendGmailViaAPI = async ({ to, subject, html, logoUrl }) => {
//   if (!to) throw new Error("Missing `to`");
//   if (!subject) throw new Error("Missing `subject`");

//   // load credentials.json and token.json (created by get-token.js)
//   const credentials = loadJSON(CREDENTIALS_PATH);
//   const token = loadJSON(TOKEN_PATH);

//   // credentials.json might be "web" or "installed"
//   const cfg = credentials.web || credentials.installed;
//   if (!cfg) throw new Error("credentials.json missing 'web' or 'installed' key");

//   const { client_id, client_secret, redirect_uris } = cfg;
//   const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
//   oAuth2Client.setCredentials(token);

//   const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

//   const messageParts = [
//     `From: Loopera Tech <${process.env.SENDER_EMAIL}>`,
//     `To: ${to}`,
//     `Reply-To: ${process.env.REPLY_TO_EMAIL || process.env.SENDER_EMAIL}`,
//     `Subject: ${subject}`,
//     "MIME-Version: 1.0",
//     'Content-Type: text/html; charset="UTF-8"',
//     "",
//     html,
//   ];
//   const raw = Buffer.from(messageParts.join("\r\n"))
//     .toString("base64")
//     .replace(/\+/g, "-")
//     .replace(/\//g, "_")
//     .replace(/=+$/, "");

//   const res = await gmail.users.messages.send({
//     userId: "me",
//     requestBody: { raw },
//   });
//   return res.data;
// };











import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

function buildHtmlTemplate({ title, introLines = [], rows = [], logoUrl }) {
  const primary = "#1e90ff";
  const dark = "#0f172a";
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#f7fafc;border-bottom:1px solid #eee;width:170px">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${value || ""}</td></tr>`
    )
    .join("");
  return `<!doctype html>
  <html>
    <head><meta charset="utf-8"/></head>
    <body style="font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f4f6f8;margin:0;padding:24px;">
      <div style="max-width:680px;margin:0 auto;">
        <div style="background:white;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.06);">
          <div style="padding:20px 24px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #eef2f7;">
            <img src="${logoUrl}" alt="Loopera" style="height:40px;object-fit:contain"/>
            <div style="margin-left:auto;color:${dark};font-weight:700">${title}</div>
          </div>
          <div style="padding:20px 24px;color:${dark};">
            ${introLines.map(l => `<p style="margin:8px 0">${l}</p>`).join("")}
            <div style="margin-top:16px;border-radius:8px;overflow:hidden;border:1px solid #eee">
              <table style="width:100%;border-collapse:collapse">
                ${rowsHtml}
              </table>
            </div>
            <p style="margin-top:18px;color:#6b7280;font-size:13px">Best regards,<br/>Loopera Tech Team</p>
          </div>
        </div>
      </div>
    </body>
  </html>`;
}

export const sendGmailViaAPI = async ({ to, subject, html, logoUrl }) => {
  if (!to) throw new Error("Missing `to`");
  if (!subject) throw new Error("Missing `subject`");

  const {
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    REFRESH_TOKEN,
    SENDER_EMAIL,
    REPLY_TO_EMAIL,
  } = process.env;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN)
    throw new Error("Missing Gmail API environment variables");

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

  const messageParts = [
    `From: Loopera Tech <${SENDER_EMAIL}>`,
    `To: ${to}`,
    `Reply-To: ${REPLY_TO_EMAIL || SENDER_EMAIL}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
  ];

  const raw = Buffer.from(messageParts.join("\r\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw },
  });

  return res.data;
};
