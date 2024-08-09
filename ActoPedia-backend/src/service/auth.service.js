import { User } from "../models/user.model";
import {hashPassword, comparePassword} from "../utils/password.handle.js"

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email:email})

    if(checkUser)return console.log("Email already exists")

    const pass = await hashPassword(password);
    const newUser = await User.create({ name, email, password:pass });
    return "user created"   
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const existsUser = await User.findOne({ email:email})
    if(!existsUser)return console.log("User not found")

    const checkPassword = await comparePassword(password, existsUser.password);
    if(!checkPassword)return console.log("Password not match")

    return "Login success"
}