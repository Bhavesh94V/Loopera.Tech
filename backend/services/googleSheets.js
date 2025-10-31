import { google } from "googleapis";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export const appendToSheet = async (formType, values) => {
  const sheetName = (() => {
    switch ((formType || "").toLowerCase()) {
      case "contact":
        return "Contact";
      case "consulting":
      case "consultation":
        return "Consulting";
      default:
        throw new Error(`Unknown form type: ${formType}`);
    }
  })();

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    resource: { values: [values] },
  });
  return response.data;
};
