import { Router } from "express";
import {readdirSync} from "fs";
import path from "path";

const __filname = new URL(import.meta.url).pathname;
const PATH_ROUTER = path.dirname(__filname);
const router = Router();

const cleanFileName =(filename)=>{
    const name = filename.split(".")[0];
    return name;
}


