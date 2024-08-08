import { Schema, model } from "mongoose";

const actorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    movies: [{
        title: {
            type: String,
            required: true
        },
        personage: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }],
    series: [{
        title: {
            type: String,
            required: true
        },
        personage: {
            type: String,
            required: true
        },
        season: {
            type: Number,
            required: true
        }
    }],
    books: [{
        title: {
            type: String,
            required: true
        },
        personage: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        author: {
            type: String,
            default: "Anonimo"
        }
    }],
    voices: [{
        title: {
            type: String,
            required: true
        },
        personage: {
            type: String,
            required: true
        }
    }],
    createBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
    }
})

const Actor = model("Actor", actorSchema);

export {
    Actor
};