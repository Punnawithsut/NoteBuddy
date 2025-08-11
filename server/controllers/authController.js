import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";


const jwt_secret = process.env.JWT_SECRET;
if(!jwt_secret) {
    console.log("No JWT_SECRET in .env File");
}

export const signin = async (req, res) => {
    try {
        const {userName, email, password} = req.body;
        
        const isExist = await userModel.findOne({ email });
        if(isExist) {
            return res.status(400).json({ success: false, message: "Email Already Registered"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            userName, email, password: hashedPassword,
        })
        await newUser.save();

        return res.status(200).json({ success: true, message: "User Created Successfully "});
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const login = async (req, res) => {
    try {
        const {userName, email, password} = req.body;

        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(400).json({ success: false, message: "Invalid Email or Password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Email or Password "});
        }

        const token = jwt.sign({ id: user._id, email: email }, jwt_secret, {
            expiresIn: "1d",
        });

        return res.status(200).json({ success: true, user: { id: user._id, userName, email, } });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

