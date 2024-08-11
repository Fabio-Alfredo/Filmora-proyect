import React from 'react';
import HeaderInfo from '../components/InformationActorsComponents/HeaderInfo';
import Biography from '../components/InformationActorsComponents/Biography';
import CreditsActor from '../components/InformationActorsComponents/CreditsActor';
import { useLocation } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'



const IformationActors = () => {

    const location = useLocation()
    const { state } = location
    const navigate = useNavigate()

    const handleExit = () => {
        navigate('/home')
    }

    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
                <hr className='h-0.5 bg-black mb-6 mx-2' />

                <div className='overflow-y-auto h-[35vh] md:h-[50vh] px-4'>
                    <FaArrowLeft className='text-2xl cursor-pointer hover:-translate-x-1 duration-500' onClick={handleExit}/>
                    <HeaderInfo name={state.name} year={state.age} />
                    <Biography Biography={state.biography} />
                    <CreditsActor titulo='peliculas' data={state.movies} />
                    <CreditsActor titulo='series' data={state.series} />
                    <CreditsActor titulo='libros' data={state.books} />
                    <CreditsActor titulo='voces' data={state.voices} />
                </div>
                <hr className='h-0.5 bg-black my-8 mx-2' />
            </div>
        </div>
    );
};

export default IformationActors;