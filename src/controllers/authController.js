import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

export const login = async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username });

        if (user && user.length > 0) {
            const isValidPassword = bcrypt.compare(req.body.password, user[0].password);

            if (isValidPassword) {
                // generate token
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    "access_token": token,
                    "message": "Login Successfully"
                });

            } else {
                res.status(401).json({
                    "error": "Authentication failed"
                });
            }

        } else {
            res.status(401).json({
                "error": "Authentication failed"
            });
        }
    } catch (error) {
        res.status(401).json({
            "error": "Authentication failed"
        });
    }
}
