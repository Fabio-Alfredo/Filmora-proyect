import { getUserController } from "../controllers/user.controller.js";
import { Router } from 'express';

const router = Router();

router.get('/getUser', getUserController);

export{
    router
}