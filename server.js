const googleapis = require('googleapis');
const express = require('express')

const auth = new googleapis.google.auth.GoogleAuth({
	credentials: require('./cred/credentials.json'),
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const ip = process.argv[2];

const app = express();

app.use(express.json());

app.post("/allsheetname", async (req, res) => {
	try {
		const sheets = googleapis.google.sheets({ version: 'v4', auth });

		const sheet_res = await sheets.spreadsheets.get({
			spreadsheetId: req.body.spreadsheetId,
			includeGridData: false
		});
		res.status(200).json(sheet_res.data.sheets.map((elm) => elm.properties.title));
	} catch (err) {
		console.log(err.message);
		res.status(500).json("Error: " + err.message);
	}
});

app.post("/spreadsheetname", async (req, res) => {
	try {
		const sheets = googleapis.google.sheets({ version: 'v4', auth });

		const spreadsheet_res = await sheets.spreadsheets.get({
			spreadsheetId: req.body.spreadsheetId,
			includeGridData: false
		});
		
		res.status(200).json(spreadsheet_res.data.properties.title);
	} catch (err) {
		console.log(err.message);
		res.status(500).json("Error: " + err.message);
	}
});

app.post("/row", async (req, res) => {
	try {
		const sheets = googleapis.google.sheets({ version: 'v4', auth });

		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: req.body.spreadsheetId,
			range: `${req.body.sheetTitle}!A1`,
			valueInputOption: 'RAW',
			insertDataOption: 'INSERT_ROWS',
			requestBody: {
				"majorDimension": "ROWS",
				"values": [
					req.body.row
				],
			}
		});

		if (response.status === 200) {
			res.status(200).json('Row inserted');
		} else {
			throw new Error(response.message);
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json("Error: " + err.message);
	}
});


const attemptLimit = 10;
const port = 8080;

function tryListen(app, attemptNo, waitTimeMillisecond) {
	console.log(`Attempt number ${attemptNo}`);

	if (attemptNo === attemptLimit) {
		console.log('Attempt limit reached. Aborting...');
		return;
	}

	app.listen(port, ip, () => {
		console.log(`Attempt success. Listening on ${ip}:${port}`);
	}).on('error', (error) => {
		console.log(`Error message: ${error.message}`);

		if (error.code === 'EADDRNOTAVAIL') {

			const time = new Date(new Date().getTime() + waitTimeMillisecond);
			const h = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
			const m = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
			const s = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
			console.log(`Retrying in ${waitTimeMillisecond / 1000} seconds. Next retry: ${h}:${m}:${s}`);

			setTimeout(() => { tryListen(app, attemptNo + 1, waitTimeMillisecond) }, waitTimeMillisecond);
		} else {
			console.log('Unidentified error. Aborting...');
		}

		// print newline
		console.log();
	});
}

tryListen(
	app,
	attemptNo = 1,
	waitTimeMillisecond = 5 * 60 * 1000
);
