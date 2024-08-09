import { verify } from "../utils/jwt.handle";
import { saveActor } from "../service/actor.service";
import { handleHttpError, HttpError } from "../utils/error.handle";

export const saveActorController = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) throw new HttpError(401, "Token required");
        
        const decoded = verify(token);
        if(!decoded) throw new HttpError(401, "Invalid token");

        const response = await saveActor(req.body, decoded.id);
        res.send(response);
    } catch (err) {
        console.log(err);
        handleHttpError(res, err.message, err);
    }
}