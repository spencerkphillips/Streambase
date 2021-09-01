import express from 'express';
import bcrytp from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from '../models/user.model.js';

const router = express.Router();

export const Login = async (req, res) => {
    const { username, email, password } = req.body; // Login with username

    try{
        const existingUser = await User.findOne({ username });

        if(!existingUser) return res.status(404).json({ message: "User does not exist, please register!" });

        const passwordCheck = await bcrytp.compare(password, existingUser.password);

        if(!passwordCheck) return res.status(400),json({ message: "Invalid credentials, please try again." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.TOKEN_SECRET, { expiresIn: '2h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error){
        res.status(500).json({ message: 'Something went wrong, please try again later!' });
    }
}

export const Register = async (req, res) => {
    const { firstName, lastName, userName, displayName, avatar, email, password, role_id } = req.body;

    try{
        const existingUser = await User.findOne({ email, userName });
        
        if(existingUser) return res.status(400).json({ message: "User already exists, please try another email" });
    } catch (error) {

    }
}

export const Validate = async (req, res) => {

}

export const Reset = async (req, res) => {

}

export const Profile = async (req, res) => {

}

export default router;