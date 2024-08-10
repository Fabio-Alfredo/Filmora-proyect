import axios from "axios";

export const getActors = async () => {
    try{
        const res = await axios.get('http://localhost:3001/actor/authors?page=2&limit=3',{
            headers:{
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return res.data;
    }catch(error){
        console.log(error);
    }
}