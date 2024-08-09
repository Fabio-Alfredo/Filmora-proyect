import { saveActorController } from "../controllers/actor.controller.js";
import { Router } from 'express';

const router = Router();

router.post("/create", saveActorController);

export{
    router
}