import axios from "axios";
const API_URL = import.meta.env.VITE_ACTOR;

const getToken = () => localStorage.getItem('token');

export const getActors = async () => {
    try {
        const res = await axios.get(`${API_URL}/authors`, {
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

export const createActor = async (actor) => {
    try {
        const res = await axios.post(`${API_URL}/create`, actor, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
}

