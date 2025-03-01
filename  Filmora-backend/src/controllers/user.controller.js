import { handleHttpError } from "../utils/error.handle.js";
import { getUser } from "../service/user.service.js";
import { verify } from "../utils/jwt.handle.js";

export const getUserController = async (req, res) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if (!token) throw new HttpError(401, "Token required");

        const decoded = verify(token);
        if(!decoded) throw new HttpError(401, "Invalid token");

        const user = await getUser(decoded.id);
        res.send(user);
    }catch(err){
        handleHttpError(res, err.message, err);
    }
}