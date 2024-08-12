import axios from "axios";
const API_URL = import.meta.env.VITE_USER;
const getToken = () => localStorage.getItem('token');

export const getUser = async () => {
    try {
        const res = await axios.get(`${API_URL}/getUser`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}` 
            }
        });
        return res.data;
    }catch(error) {
        throw error.response.data;
    }
}