import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserSchema } from "../models/userModel";

const User = mongoose.model('User', UserSchema);

export const getUsers = (req, res) => {
    res.send('GET Request Controller');
}

export const getUserWithId = (req, res) => {
    res.send('GET Single Request Controller');
}

export const updateUser = (req, res) => {
    res.send('PUT Request Controller');
}

export const deleteUser = (req, res) => {
    res.send('DELETE Request Controller');
}