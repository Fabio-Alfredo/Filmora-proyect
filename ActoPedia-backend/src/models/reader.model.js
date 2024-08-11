import { Schema, model } from "mongoose";

const readCharacterSchema = new Schema({
    actorId: {
        type: Schema.Types.ObjectId,
        ref: "Actor",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    markerAt: {
        type: Date,
        default: Date.now
    }
})

const Reader = model("Reader", readCharacterSchema);

export {
    Reader
}