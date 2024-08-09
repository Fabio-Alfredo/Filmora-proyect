import { cloudinary } from '../config/cloudinaryConecction.js';
import { Actor } from '../models/actor.model.js';
import { HttpError } from '../utils/error.handle.js';

export const saveActor = async (actor, id) => {
    const existActor = await Actor.findOne({ name: actor.name });
    if (existActor) throw new HttpError(400, "Actor already exist");

    const newAcot = await Actor.create({ ...actor, createBy: id });
    return newAcot
}

export const saveImageActor = async (image) => {
    try {

        const result = await cloudinary.uploader.upload(image, {
            folder: 'strive',
        })
        return result.secure_url;
        
    } catch (err) {
        throw new HttpError(400, err.message);
    }
}