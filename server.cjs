import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir les fichiers statiques du build Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Options HTTPS
const options = {
  key: fs.readFileSync(path.join(__dirname, 'sitelocale.key')),
  cert: fs.readFileSync(path.join(__dirname, 'sitelocale.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'myRootCA.crt'))
};

// Gérer toutes les routes pour le SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Créer le serveur HTTPS
https.createServer(options, app).listen(8443, () => {
  console.log('Serveur HTTPS démarré sur https://sitelocale.test:8443');
});