
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const dotenv=require('dotenv')

dotenv.config(); 

const JWT_SECRET = process.env.JWT_SECRET;

const signInController= async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET);
        res.json({ token });

    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ error: "Error while signing in" });
    }
}

 const signUpController=async (req, res) => {
    console.log('signup')
    const { email, password } = req.body;

    try {
        const [existingUsers] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

        if (existingUsers.length > 0) {
            return res.status(409).json({ error: "Email already in use" });
        }

         const hashedPassword = await bcrypt.hash(password, 10);

        const [results] = await db.promise().query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
        const userId = results.insertId;

        const token = jwt.sign({ id: userId }, JWT_SECRET);

        res.json({ token });

    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ error: "Error while signing up" });
    }
}


module.exports={signInController,signUpController}