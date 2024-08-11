import {getReaders, saveReader} from "../service/reader.service.js";
import { handleHttpError, HttpError } from "../utils/error.handle.js";
import { verify } from "../utils/jwt.handle.js";


export const getReadersController = async (req, res) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if (!token) throw new HttpError(401, "Token required");

        const decoded = verify(token);
        if(!decoded) throw new HttpError(401, "Invalid token");

        const readers = await getReaders(decoded.id);
        res.send(readers);
    }catch(err){
        handleHttpError(res, err.message, err);
    }
}

export const saveReaderController = async (req, res) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if (!token) throw new HttpError(401, "Token required");

        const decoded = verify(token);
        if(!decoded) throw new HttpError(401, "Invalid token");
        console.log(decoded)

        const { actorId } = req.body;
        const response = await saveReader(actorId, decoded.id);
        res.send(response);
    }catch(err){
        handleHttpError(res, err.message, err);
    }
}