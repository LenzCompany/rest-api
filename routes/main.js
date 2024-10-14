import path from 'path';
import { fileURLToPath } from 'url';

// Membuat kembali __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url); // Mendapatkan nama file saat ini
const __dirname = path.dirname(__filename);        // Mendapatkan direktori saat ini

import express from 'express'
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('doc.html', { root: path.join(process.cwd(), 'views') })
})

export default router