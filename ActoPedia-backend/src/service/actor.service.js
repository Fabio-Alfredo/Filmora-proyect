import { Actor } from '../models/actor.model.js';
import {verify} from  '../utils/jwt.handle.js';
import {HttpError} from '../utils/error.handle.js';

export const saveActor = async (actor, token)=>{
    if(!token) throw new HttpError("Unauthorized")
    
    const {id} = verify(token)
    const newActor = await Actor.create({...actor, createdBy:id})
    return newActor;
}