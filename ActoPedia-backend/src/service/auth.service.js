import { User } from "../models/user.model.js";
import {hashPassword, comparePassword} from '../utils/password.handle.js'
import {sign} from '../utils/jwt.handle.js'
import {HttpError} from '../utils/error.handle.js'

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email:email})

    if(checkUser) throw new HttpError(400, "User already exists")
    const pass = await hashPassword(password)

    const newUser = await User.create({ name, email, password:pass });
    return "user created"   
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const existsUser = await User.findOne({email:email})
    if(!existsUser) throw new HttpError(404, "Invalid credentials")

    const isCorrect = await comparePassword(password, existsUser.password)
    if(!isCorrect) throw new HttpError(400, "Invalid credentials")

    const token = sign({email:existsUser.email, id:existsUser._id})
    return {token};
}