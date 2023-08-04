const express = require('express');
const crypto = require("crypto");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

// Passwordless registration
router.post('/register', async (req, res) => {
    try {
        const { email, phone, countryCode, firstName, lastName } = req.body;

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            // TODO: Send confirmation code for Login
            return res.status(400).json({ message: 'User already exists' });
        }

        const confirmationCode = generateRandomCode();
        const userId = generateUserId();
        /* Temporal token expires in 30 minutes with a temporal JWT secret */
        const jwtToken = jwt.sign({ _id: userId }, process.env.JWT_TEMP_SECRET, { expiresIn: '30m' });

        await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                countryCode,
                userId
            }
        })

        await prisma.authProfile.create({
            data: {
                confirmationCode,
                userId
            }
        })

        // Email Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Signup to Cahierix',
            html: getEmailTemplate(confirmationCode),
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return res.json({
            token: jwtToken
        });
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Send passwordless login email
router.post('/login/email', async (req, res) => {
    const { email } = req.body;

    // Find the user in the database
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Generate a random confirmation code
    const confirmationCode = generateRandomCode();
    /* Temporal token expires in 30 minutes with a temporal JWT secret */
    const jwtToken = jwt.sign({ _id: user.userId }, process.env.JWT_TEMP_SECRET, { expiresIn: '30m' });

    // Update the user's confirmation code in the database
    await prisma.authProfile.update({ where: { userId: user.userId }, data: { confirmationCode } });

    // Email Transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: 'Login to Cahierix',
        html: getEmailTemplate(confirmationCode),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    return res.json({ message: 'Confirmation code sent successfully', token: jwtToken });
});

// Confirm login code
router.post('/login/confirm', async (req, res) => {
    const { token, confirmationCode } = req.body;

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_TEMP_SECRET);
    } catch (e) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if user has AuthProfile
    const authProfile = await prisma.authProfile.findUnique({ where: { userId: decodedToken._id } });

    if (!authProfile) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Validate the confirmation code
    if (authProfile.confirmationCode !== confirmationCode) {
        return res.status(400).json({ message: 'Invalid confirmation code' });
    }

    // Clear the confirmation code from the user's document in the database
    await prisma.authProfile.update({ where: { userId: authProfile.userId }, data: { confirmationCode: null, verified: true } });

    // Generate JWT token
    const authToken = jwt.sign({ _id: authProfile.userId, }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP_AT,
    });

    return res.json({ token: authToken });
});


/**
 * Helper function to generate a random confirmation code
 * @returns Confirmation code (6 bytes long)
 */
function generateRandomCode() {
    const confirmationCode = crypto.randomBytes(3).toString('hex').toLowerCase();
    return confirmationCode;
}

/**
 * generateUserId - Generates random 36 byes long userId
 * @returns String 36 bytes long
 */
function generateUserId() {
    const userId = uuidv4();
    return userId;
}

/**
 * Generates an email template with handlebars
 * @param {string} confirmationCode 6 btytes confirmation code
 * @returns Email template string
 */
function getEmailTemplate(confirmationCode) {
    const handlebars = require('handlebars');
    const fs = require('fs');
    const filePath = path.join(__dirname, '..', 'views', 'confirmationEmailTemplate.hbs');
    const source = fs.readFileSync(filePath, 'utf-8');
    const template = handlebars.compile(source);
    return template({ confirmationCode });
}

module.exports = router;
