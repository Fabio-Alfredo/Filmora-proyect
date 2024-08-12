import axios from "axios";
const API_URL = import.meta.env.VITE_AUTH;

export const login = async (data) => {
    try{
        const res = await axios.post(`${API_URL}/login`, data);
        return res.data;
    }catch(error){
        throw error.response.data;
    }
}

export const register = async (data) => {
    try{
        const res = await axios.post(`${API_URL}/register`, data);
        return res.data;
    }catch(error){
        console.log(error);
         throw error.response.data;
    }
}