import axios from "axios";

const getToken = () => localStorage.getItem('token');

export const getUser = async (data) => {
    try {
        const res = await axios.get('http://localhost:3001/user/getUser', {
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