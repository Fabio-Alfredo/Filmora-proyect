import { User } from "../models/user.model";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email:email})

    if(checkUser)return console.log("Email already exists")
    const newUser = await User.create({ name, email, password });
    return "user created"   
}
