const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const users = []; // In-memory data store for users
const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = 10;

async function register(req, res) {
    try {
        const { email, username, password } = req.body;
        
        // Check if the user already exists
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User(email, username, hashedPassword);
        users.push(user);
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    register,
    login,
};
