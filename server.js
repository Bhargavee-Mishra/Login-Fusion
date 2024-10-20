const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 4000;
const SECRET_KEY = 'your_secret_key';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate user authentication (replace with real database check)
    if (username === 'user' && password === 'pass') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ success: true, token });
    }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Login Fusion server is running on port ${PORT}`);
});
