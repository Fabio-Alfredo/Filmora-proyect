import React, { useState, useEffect } from 'react';
import CardActor from '../components/ListActorsComponent/CardActor';
import { getActors } from '../services/actor.service';
import { GoPlusCircle } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import InformationUser from '../components/ListActorsComponent/InformationUser';
import { getReaders } from '../services/reader.service';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { HashLoader } from 'react-spinners'



const ListActors = () => {

    const [actors, setActors] = useState([]);
    const [readers, setReaders] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getActorsFuction();
    }, [])

    const getActorsFuction = async () => {
        const res = await getActors();
        const resp = await getReaders();
        console.log(resp);
        setReaders(resp);
        setActors(res);
    }

    const handleNavigate = () => {
        navigate('/FormActor');
    }

    if (user == null ) {
        return (
            <div className='h-screen w-full flex justify-center items-center'>
                <HashLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <InformationUser user={user} />
            <div className='w-full relative p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
                <hr className='h-0.5 bg-black mb-6 mx-4' />
                <div className='overflow-y-auto h-[35vh] md:h-[50vh] px-4 '>
                    {
                        actors?.map(actor => (
                            <CardActor key={actor.createAt} actor={actor} reader={readers} />
                        ))
                    }
                </div>

                <hr className='h-0.5 bg-black my-8 mx-4' />
                <GoPlusCircle onClick={handleNavigate} className='rounded-full cursor-pointer absolute top-3/4 left-[85%] bg-white text-5xl' />
            </div>

        </div>
    );
};

export default ListActors;