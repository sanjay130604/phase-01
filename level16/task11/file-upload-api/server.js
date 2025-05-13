const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: './uploads/', // Save files to the 'uploads' directory
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// File type validation (allow only images)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'));
    }
};

// Configure Multer
const upload = multer({ 
    storage, 
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter
});

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.send('<h3>Error: No file uploaded!</h3><a href="/">Go back</a>');
    }

    res.send(`
        <h2>File Uploaded Successfully!</h2>
        <p><strong>File Name:</strong> ${req.file.filename}</p>
        <p><strong>Size:</strong> ${(req.file.size / 1024).toFixed(2)} KB</p>
        <p><img src="/uploads/${req.file.filename}" width="300"/></p>
        <a href="/">Upload another file</a>
    `);
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Global error handler
app.use((err, req, res, next) => {
    res.status(400).send(`<h3>Error: ${err.message}</h3><a href="/">Go back</a>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
