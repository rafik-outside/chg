import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const credentialsPath = path.resolve(process.cwd(), 'credentials.json');

async function authenticate() {
    const credentials = JSON.parse(fs.readFileSync(credentialsPath));
    const { client_secret, client_id, redirect_uris } = credentials.installed;

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Generate the URL for the user to authenticate
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    // After the user authenticates, they will receive a code. Use that code to get the token.
    const code = prompt('Enter the code from the page: ');

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Save the token for future use
    const tokenPath = path.resolve(process.cwd(), 'token.json');
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));

    console.log('Token stored to', tokenPath);
}

authenticate();