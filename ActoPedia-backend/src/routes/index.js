import { Router } from 'express';
import {readdirSync} from 'fs';
import path from 'path';

const __filname = new URL(import.meta.url).pathname;
const PATH_ROUTER = path.dirname(__filname);
const router = Router();

const cleanFileName =(filename)=>{
    const name = filename.split(".")[0];
    return name;
}


readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){
      import(`./${cleanName}.route.js`).then((module)=>{
          router.use(`/${cleanName}`, module.router);
      }).catch((err)=>{
          console.error(`Error to import ${cleanName} route`, err);
      })

    }
})

export{
    router
};