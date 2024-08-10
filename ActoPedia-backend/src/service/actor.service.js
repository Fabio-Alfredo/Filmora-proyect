import { cloudinary } from '../config/cloudinaryConecction.js';
import { Actor } from '../models/actor.model.js';
import { HttpError } from '../utils/error.handle.js';

export const saveActor = async (actor, id) => {
    const existActor = await Actor.findOne({ name: actor.name });
    if (existActor) throw new HttpError(400, "Actor already exist");

    const newAcot = await Actor.create({ ...actor, createBy: id });
    return newAcot
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