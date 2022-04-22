import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserSchema } from "../models/userModel";

const User = mongoose.model('User', UserSchema);

export const getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
}

export const getUserWithId = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user' });
    });
}