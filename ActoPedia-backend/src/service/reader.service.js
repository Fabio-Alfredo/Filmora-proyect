import { HttpError } from "../utils/error.handle";
import { Reader } from "../models/reader.model";

export const saveReader = async (actorId, userId) => {
    const newReader = await Reader.create({ actorId, userId });
    return newReader;
}

export const getReaders = async () => {
    const readers = await Reader.find();
    return readers;
}