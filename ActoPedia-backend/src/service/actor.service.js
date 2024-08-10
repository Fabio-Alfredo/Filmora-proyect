import { cloudinary } from '../config/cloudinaryConecction.js';
import { Actor } from '../models/actor.model.js';
import { HttpError } from '../utils/error.handle.js';
import { paginate } from '../utils/pagination.handle.js';

export const saveActor = async (actor, id) => {
    const existActor = await Actor.findOne({ name: actor.name });
    if (existActor) throw new HttpError(400, "Actor already exist");

    const newAcot = await Actor.create({ ...actor, createBy: id });
    return newAcot
}

export const getActors = async (page, limit, filters) => {
    const actors = await paginate(Actor, page, limit, filters);
    return actors;
}

export const getActorsByName = async (name) => {
    const actor = await Actor.find({mame:{ $regex: name, $options: 'i' }});
    return actor;
}

export const deleteActor = async (id) => {
    const actor = await Actor.findByIdAndDelete(id);
    if (!actor) throw new HttpError(404, "Actor not found");
    return "deleted";
}

export const saveImageActor = async (file) => {

    const extension = file.mimetype.split('/')[1];
    const validExtensions = ['png', 'jpg', 'jpeg'];
    if (!validExtensions.includes(extension)) {
        throw new HttpError(400, "Invalid file extension");
    }

    try {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: 'actors',
                    public_id: file.originalname,
                },
                (error, result) => {
                    if (error) {
                        return reject(new HttpError(400, error.message));
                    }
                    resolve(result.secure_url);
                }
            );

            uploadStream.end(file.buffer);
        });
    } catch (err) {
        throw new HttpError(400, `Image upload failed: ${err.message}`);
    }
};