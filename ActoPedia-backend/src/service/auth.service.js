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
