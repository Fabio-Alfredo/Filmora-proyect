import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addReader, deleteReader } from '../../services/reader.service';
import Swal from 'sweetalert2';

const CardActor = ({ actor, reader }) => {

    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isRead = reader.some(readActor => readActor.actorId === actor._id); // Asegúrate de que el campo 'id' es correcto
        setChecked(isRead);
    }, [reader, actor.id]);


    const handleCheck = async (e) => {
        console.log(actor._id)
        setChecked(!checked);
        try {
            if (!checked) {
                const data = {
                    actorId: actor._id
                }
                const res = await addReader(data);
                console.log(res);
            } else {

                const res = await deleteReader(actor._id);
                console.log(res);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.error}`,
                footer: 'Intenta de nuevo'
            })
        }
    }

    const handleClik = () => {
        navigate('/IformationActor', { state: actor });
    }

    return (
        <>

            <div className='w-full'>
                <input type='checkbox' className='mr-2' checked={checked} onChange={handleCheck} />
                <div onClick={handleClik} className={`  font-popins flex items-center cursor-pointer flex-wrap justify-between px-3 md:hover:px-3 md:px-6  w-full mt-2 py-2 text-lg list-none rounded-xl hover:bg-slate-100 hover:-translate-y-1 duration-500 ${checked ? 'opacity-50' : ''
                    }`}>
                    <img className='rounded-full w-16 h-16' src={actor.image} />
                    <div className='flex flex-col justify-start items-center my-1'>
                        <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Actor</p>
                        <p className='font-popins overflow-hidden text-ellipsis whitespace-nowrap max-w-64 text-gray-500  text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none group/item2'>
                            {actor.name}
                        </p>
                    </div>
                    <div className=' flex-col items-center my-1  '>
                        <p className='font-popins font-bold text-sm   sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Edad</p>
                        <p className='font-popins overflow-hidden text-center text-xs sm:text-lg lg:text-xl  text-gray-500 select-none'>
                            {actor.age}
                        </p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CardActor;