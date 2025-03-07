import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andreabcontarini@gmail.com',
    // Nota: È consigliabile utilizzare una password per app specifica di Gmail
    // invece della password principale dell'account per maggiore sicurezza
    pass: 'Adda2001'
  }
});

export async function POST(req: Request) {
  const { to, from, subject, text } = await req.json();

  try {
    await transporter.sendMail({
      from: 'andreabcontarini@gmail.com', // Forziamo l'uso dell'email autenticata
      to: 'andreabcontarini@gmail.com',
      subject,
      text
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Per gestire le richieste CORS
      }
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
} 