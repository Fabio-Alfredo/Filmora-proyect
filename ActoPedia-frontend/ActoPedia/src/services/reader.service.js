import axios from "axios";

const getToken = () => localStorage.getItem('token');

export const getReaders = async () => {
    try {
        const res = await axios.get('http://localhost:3001/reader/getReaders', {
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
        const res = await axios.post('http://localhost:3001/reader/postReader', reader, {
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
        const res = await axios.delete(`http://localhost:3001/reader/deleteReader/${reader}`, {
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