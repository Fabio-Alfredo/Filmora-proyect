import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes/index.js';
import {dbConnection} from './config/bdConecction.js';
import multer from 'multer';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());
app.use(express.json());
app.use(router);
dbConnection();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})