import axios from "axios";
const API_URL = import.meta.env.VITE_READER;

const getToken = () => localStorage.getItem('token');

export const getReaders = async () => {
    try {
        const res = await axios.get(`${API_URL}/getReaders`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const addReader = async (reader) => {
    try {
        const res = await axios.post(`${API_URL}/postReader`, reader, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const deleteReader = async (reader) => {
    try {
        const res = await axios.delete(`${API_URL}/deleteReader/${reader}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
        });
        return res.data;
    }
    catch (error) {
        throw error.response.data;
    }
}