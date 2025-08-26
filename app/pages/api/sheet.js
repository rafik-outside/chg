import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const spreadsheetId = '1gXRdOyYz1NGUdMNFLU5N6GN2B9lcjCwRuRr9WCtcGgo'; 
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const credentialsPath = path.resolve(process.cwd(), 'credentials.json');
            const credentials = JSON.parse(fs.readFileSync(credentialsPath));

            const { client_secret, client_id, redirect_uris } = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

            const tokenPath = path.resolve(process.cwd(), 'token.json');
            if (fs.existsSync(tokenPath)) {
                const token = JSON.parse(fs.readFileSync(tokenPath));
                oAuth2Client.setCredentials(token);
            } else {
                return res.status(400).json({ error: 'Token not found. Please authenticate first.' });
            }

            const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

            const { data } = req.body;

            const range = 'Sheet1!A1:D1';  
            const resource = {
                values: data,
            };

            // Append data to the sheet
            const result = await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: 'RAW',  // You can use 'USER_ENTERED' for formula parsing
                resource,
            });

            return res.status(200).json(result.data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error writing to Google Sheets' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
