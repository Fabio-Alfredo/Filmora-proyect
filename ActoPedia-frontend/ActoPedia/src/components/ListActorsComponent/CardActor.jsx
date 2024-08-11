import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const CardActor = ({actor}) => {

    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheck = () => {
        setChecked(!checked);
    }

    const handleClik=()=>{
        navigate('/IformationActor', {state: actor});
    }

    return (
        <>

            <div onClick={handleClik} className={`  font-popins flex items-center cursor-pointer flex-wrap justify-between px-3 md:hover:px-3 md:px-6  w-full mt-2 py-2 text-lg list-none rounded-xl hover:bg-slate-100 hover:-translate-y-1 duration-500 ${checked ? 'opacity-50' : ''
                }`}>
                <div>
                    <input type='checkbox' className='mr-2' onChange={handleCheck} />
                    <img className='rounded-full w-16 h-16' src='https://www.unicef.org/sites/default/files/styles/media_large_image/public/UN0318726_CRC30_SP.jpg.webp?itok=5V7HpisK' />
                </div>
                <div className='flex flex-col justify-start items-center my-1'>
                    <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Actor</p>
                    <p className='font-popins overflow-hidden text-ellipsis whitespace-nowrap max-w-64 text-gray-500  text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none group/item2'>
                        {actor.name}
                    </p>
                </div>
                <div className=' flex-col items-center my-1  '>
                    <p className='font-popins font-bold text-sm   sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Nacimiento</p>
                    <p className='font-popins overflow-hidden text-center text-xs sm:text-lg lg:text-xl  text-gray-500 select-none'>
                        {actor.age}
                    </p>
                </div>

            </div>

        </>
    );
};

export default CardActor;