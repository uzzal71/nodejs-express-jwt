import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserSchema } from "../models/userModel";

const User = mongoose.model('User', UserSchema);

export const singup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let newUser = new User({
            name     : req.body.name,
            username : req.body.username,
            email    : req.body.email,
            phone    : req.body.phone,
            password : hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup was successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

export const login = (req, res) => {
    res.send('GET Request Controller');
}
