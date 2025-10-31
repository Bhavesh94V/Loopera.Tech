import fs from "fs";
import readline from "readline";
import { google } from "googleapis";

// If modifying scopes, delete token.json and re-run this script
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const TOKEN_PATH = "token.json";

// Load client secrets from credentials.json
fs.readFile("credentials.json", async (err, content) => {
    if (err) return console.error("Error loading client secret file:", err);
    await authorize(JSON.parse(content));
});

async function authorize(credentials) {
    
    const data = credentials.installed || credentials.web;
    const { client_secret, client_id, redirect_uris } = data;

    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check for existing token
    if (fs.existsSync(TOKEN_PATH)) {
        console.log("✅ Token already exists at", TOKEN_PATH);
        return;
    }

    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });

    console.log("Authorize this app by visiting this URL:", authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the code from that page here: ", async (code) => {
        rl.close();
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
        console.log("✅ Token stored to", TOKEN_PATH);
    });
}
