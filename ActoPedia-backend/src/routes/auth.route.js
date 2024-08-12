import {registerController, loginController} from '../controllers/auth.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);

export{
    router
}