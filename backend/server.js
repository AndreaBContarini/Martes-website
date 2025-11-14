const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configura il trasportatore email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Usa la password dall'ambiente
  }
});

// Route per l'invio delle email
app.post('/send-email', async (req, res) => {
  const { subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: 'andreabcontarini@gmail.com',
      to: 'andreabcontarini@gmail.com',
      subject,
      text
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    res.status(500).json({ error: 'Errore nell\'invio dell\'email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
}); 