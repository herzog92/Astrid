const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const nodemailer = require("nodemailer");

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3002; // Use the PORT from environment variables if available

// Middleware for JSON and CORS
app.use(express.json());
app.use(cors());

// Serve the index.html file for all GET requests to the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { nom, prenom, tel, email, devis } = req.body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
        host: "smtp.strato.de", // Replace with your SMTP server host
        port: 465, // Secure port (for SSL)
        secure: true,
        auth: {
            user: "info@thom-consulting.tech", // Replace with your SMTP server username
            pass: "^?a%He2|9V9S", // Replace with your SMTP server password
        },
    });

    // Email content
    const mailOptions = {
        from: '"Your Name" <your_email@example.com>', // Sender address
        to: "info@thom-consulting.tech", // Receiver address
        subject: `New message from ${nom} ${prenom}`, // Subject line
        html: `
            <p>Name: ${nom}</p>
            <p>Vorname: ${prenom}</p>
            <p>Tel: ${tel}</p>
            <p>Email: ${email}</p>
            <p>Angebot: ${devis}</p>
        `, // HTML body content
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.json({ success: false });
    }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
