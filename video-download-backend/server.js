const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data
const mockUsers = [
  {
    username: 'testuser',
    password: 'password123',
    isAdmin: false
  },
  {
    username: 'admin',
    password: 'adminpass',
    isAdmin: true
  }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the mock data
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({
      message: 'Login successful!',
      isAdmin: user.isAdmin
    });
  } else {
    res.status(401).json({
      message: 'Invalid username or password'
    });
  }
});

// File Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

// Endpoint for File Upload
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({
      message: 'File uploaded successfully',
      filePath: req.file.path
    });
  } catch (error) {
    res.status(500).json({ error: 'File upload failed' });
  }
});

// Endpoint to get list of files in the uploads folder
app.get('/files', (req, res) => {
  const uploadDir = path.join(__dirname, 'uploads');

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error('Error reading files:', err);
      return res.status(500).json({ message: 'Unable to retrieve files' });
    }

    res.status(200).json(files);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
