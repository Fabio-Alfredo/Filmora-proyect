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
    const actors = await find()
    return actors;
}

export const getActorsByName = async (name) => {
    const actor = await Actor.find({ name: { $regex: name, $options: 'i' } }).limit(10);
    return actor;
}

export const deleteActor = async (id) => {
    const actor = await Actor.findByIdAndDelete(id);
    if (!actor) throw new HttpError(404, "Actor not found");
    return "deleted";
}

export const saveImageActor = async (base64Image, publicId) => {
    try {
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder: 'actors',
                    public_id: publicId,
                    resource_type: 'image', // Asegúrate de especificar el tipo de recurso
                    encoding: 'base64' // Asegúrate de especificar el tipo de codificación
                },
                (error, result) => {
                    if (error) {
                        return reject(new HttpError(400, error.message));
                    }
                    resolve(result.secure_url);
                }
            ).end(base64Image);
        });

        return result;
    } catch (err) {
        throw new HttpError(400, `Image upload failed: ${err.message}`);
    }
};