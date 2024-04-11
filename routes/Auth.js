const express = require('express');
const {signUpController,signInController}=require('../controller/authController')

const dotenv=require('dotenv')

dotenv.config(); 

const router = express.Router();


const validateInput = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    next();
};

router.post('/signup',validateInput,signUpController );

router.post('/signin',validateInput, signUpController );



module.exports = router;
