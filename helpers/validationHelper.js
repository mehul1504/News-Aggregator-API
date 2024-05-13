require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function validateRegister(req, res, next) {
    const { email, username, password } = req.body;
    if (!username || !password ) {
        return res.status(400).json({ message: 'Username and password or email are required' });
    }
    if(!email){
        return res.status(400).json({ message: ' email is required' });
    }
    next();
}

function validateLogin(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required' });
    }
    next();
}

function authenticateUser(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
}

function validatePreferencesUpdate(req, res, next) {
    const newPreferences = req.body.preferences;
    if (!newPreferences || typeof newPreferences !== 'object') {
        return res.status(400).json({ message: 'Invalid preferences format' });
    }
    next();
}

module.exports = {
    validateRegister,
    validateLogin,
    authenticateUser,
    validatePreferencesUpdate,
};
