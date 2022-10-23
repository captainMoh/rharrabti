const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path: './config/.env'});
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(express.static('./client'));
app.use(express.json());

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})

app.post('/message', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `${req.body.nom} ${req.body.email} contact depuis portfolio`,
        text: `
        mail: ${req.body.email}
        ${req.body.message}`
    })
})

app.listen(process.env.PORT, () => console.log('app started'))