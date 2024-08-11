import {
    saveActorController,
    getActorsController,
    getActorsByNameController,
    deleteActorController
} from "../controllers/actor.controller.js";
import { Router } from 'express';

const router = Router();

router.post("/create", saveActorController);
router.get("/authors", getActorsController);
router.get("/getByName", getActorsByNameController);
router.delete("/delete/:userId", deleteActorController);

export {
    router
}