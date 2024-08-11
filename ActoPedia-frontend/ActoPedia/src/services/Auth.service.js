import axios from "axios";
const API_URL_LOGIN = "http://localhost:3001/auth/login";
const API_URL_REGISTER = "http://localhost:3001/auth/register";

export const login = async (data) => {
    try{
        const res = await axios.post(API_URL_LOGIN, data);
        return res.data;
    }catch(error){
        console.log(error.response.data);
    }
}

export const register = async (data) => {
    try{
        const res = await axios.post(API_URL_REGISTER, data);
        return res.data;
    }catch(error){
        console.log(error.response.data);
    }
}