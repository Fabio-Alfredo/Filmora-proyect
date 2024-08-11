import axios from "axios";
const API_URL = "http://localhost:3001/auth/login";

export const login = async (data) => {
    try{
        const res = await axios.post(API_URL, data);
        return res.data;
    }catch(error){
        console.log(error);
    }
}