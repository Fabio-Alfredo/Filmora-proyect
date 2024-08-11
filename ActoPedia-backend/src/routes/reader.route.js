import { getReadersController, saveReaderController } from "../controllers/reader.controller.js";
import { Router } from "express";

const router = Router();

router.get('/getReaders', getReadersController);
router.post('/postReader', saveReaderController);

export {
    router
}