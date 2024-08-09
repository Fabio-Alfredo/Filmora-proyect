import { Actor } from '../models/actor.model.js';
import { HttpError } from '../utils/error.handle.js';

export const saveActor = async (actor, id)=>{
    const existActor = await Actor.findOne({name: actor.name});
    if(existActor)  throw new HttpError(400, "Actor already exist");
    
    const newAcot = await Actor.create({...actor, createBy:id});
    return newAcot
}