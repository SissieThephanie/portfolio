const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://portfolio-sissies-projects.vercel.app'],
  credentials: true
}));
app.use(express.static(path.join(__dirname, 'dist')));

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Vérifier la configuration email au démarrage
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Erreur configuration email:', error);
  } else {
    console.log('✅ Configuration email réussie');
  }
});

// Route API pour envoyer l'email
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('📧 Nouvelle demande d\'envoi:', { name, email });

    // Validation
    if (!name || !email || !message) {
      return res.status(400).send('Tous les champs sont requis');
    }

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Vous recevez l'email
      subject: `📩 Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            📬 Nouveau message depuis votre portfolio
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations du contact :</h3>
            <p><strong>👤 Nom :</strong> ${name}</p>
            <p><strong>📧 Email :</strong> <a href="mailto:${email}">${email}</a></p>
            
            <h3 style="color: #374151;">💬 Message :</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              📅 Reçu le ${new Date().toLocaleString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de votre portfolio
        
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Reçu le ${new Date().toLocaleString('fr-FR')}
      `,
      replyTo: email // Pour pouvoir répondre directement
    };

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email envoyé avec succès:', info.messageId);
    
    res.status(200).send('Email envoyé avec succès !');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi:', error);
    res.status(500).send('Erreur lors de l\'envoi de l\'email');
  }
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({
    status: '✅ API fonctionnelle',
    email_configured: !!process.env.EMAIL_USER,
    timestamp: new Date().toISOString()
  });
});

// Route pour les fichiers statiques (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📧 API email : http://localhost:${PORT}/api/send-email`);
  console.log(`🧪 Test API : http://localhost:${PORT}/api/test`);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️  Attention: Variables EMAIL_USER et EMAIL_PASS non configurées');
  }
});