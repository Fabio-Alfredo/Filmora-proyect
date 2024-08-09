import {register, login} from '../service/auth.service.js';


export const registerController = async (req, res)=>{
    try{
        const response = await register(req, res)
        res.send(response)
    }catch(err){
        console.log(err)
    }
}

export const loginController = async (req, res)=>{
    try{
        const response = await login(req, res)
        res.send(response)
    }catch(err){
        console.log(err)
    }
}