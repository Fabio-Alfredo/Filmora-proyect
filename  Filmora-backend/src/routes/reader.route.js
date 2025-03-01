import { getReadersController, saveReaderController, deleteReaderController } from "../controllers/reader.controller.js";
import { Router } from "express";

const router = Router();

router.get('/getReaders', getReadersController);
router.post('/postReader', saveReaderController);
router.delete('/deleteReader/:actorId', deleteReaderController);

export {
    router
}