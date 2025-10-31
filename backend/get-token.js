import fs from "fs";
import readline from "readline";
import { google } from "googleapis";
import path from "path";

const CREDENTIALS_PATH = path.join(process.cwd(), "backend", "credentials.json");
const TOKEN_PATH = path.join(process.cwd(), "backend", "token.json");
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error("credentials.json not found at", CREDENTIALS_PATH);
    process.exit(1);
}

const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
const cfg = creds.web || creds.installed;
if (!cfg) {
    console.error("credentials.json must contain 'web' or 'installed' object.");
    process.exit(1);
}

const { client_id, client_secret, redirect_uris } = cfg;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
});

console.log("Authorize this app by visiting this URL:\n", authUrl, "\n");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the full code from the URL here: ", async (code) => {
    rl.close();
    try {
        const { tokens } = await oAuth2Client.getToken(code.trim());
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
        console.log("✅ Token stored at", TOKEN_PATH);
    } catch (err) {
        console.error("Error retrieving access token:", err);
    }
});
