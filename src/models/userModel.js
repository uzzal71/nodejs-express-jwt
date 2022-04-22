import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    name: {
        type: String,
        required: "Enter a name"
    },
    username: {
        type: String,
        required: "Enter a username"
    },
    email: {
        type: String,
        required: "Enter a email"
    },
    phone: {
        type: Number
    },
    password: {
        type: string,
        required: "Enter a password"
    },
    status: {
        type: string,
        enum: ['active', 'inactive']
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});