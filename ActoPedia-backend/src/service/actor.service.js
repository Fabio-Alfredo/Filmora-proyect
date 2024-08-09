import { Actor } from '../models/actor.model.js';
import {verify} from  '../utils/jwt.handle.js';
import {HttpError} from '../utils/error.handle.js';

export const saveActor = async (actor, id)=>{
    const newAcot = await Actor.create({...actor, createBy:id});
    return newAcot
}