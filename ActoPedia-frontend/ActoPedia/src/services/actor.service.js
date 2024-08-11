import axios from "axios";

const getToken = () => localStorage.getItem('token');

export const getActors = async () => {
    try {
        const res = await axios.get('http://localhost:3001/actor/authors?page=2&limit=10', {
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
        const res = await axios.post('http://localhost:3001/actor/create', actor, {
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