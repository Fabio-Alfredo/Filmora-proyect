import { HttpError } from "../utils/error.handle.js";
import { User } from "../models/user.model.js";

export const getUser = async (userId) => {
    const user = await User.findById(userId).select("-password -role");
    return user;
}