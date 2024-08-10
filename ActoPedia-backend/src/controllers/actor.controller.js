import { verify } from "../utils/jwt.handle.js";
import { saveActor, saveImageActor } from "../service/actor.service.js";
import { handleHttpError, HttpError } from "../utils/error.handle.js";


export const saveActorController = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) throw new HttpError(401, "Token required");

        const decoded = verify(token);
        if(!decoded) throw new HttpError(401, "Invalid token");

        const imgURL = await saveImageActor(req.files[0]);

        const actor = {
             ...req.body,
             image: imgURL
         }

        const response = await saveActor(actor, decoded.id);
        res.send(response);
    } catch (err) {
        handleHttpError(res, err.message, err);
    }
}