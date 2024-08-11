import { HttpError } from "../utils/error.handle.js";
import { Reader } from "../models/reader.model.js";

export const saveReader = async (actorId, userId) => {
    const newReader = await Reader.create({ actorId, userId });
    return newReader;
}

export const getReaders = async (userId) => {
    const readers = await Reader.find({userId:userId});
    return readers;
}