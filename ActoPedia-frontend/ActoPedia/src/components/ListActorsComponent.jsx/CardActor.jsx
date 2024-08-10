import React from 'react';

const CardActor = () => {
    return (
        <>
            <>

                <div className='font-popins group/item flex items-center flex-wrap justify-between px-3 md:hover:px-3 md:px-6  w-full mt-2 py-2 text-lg list-none rounded-xl hover:bg-slate-100 hover:-translate-y-1 duration-500 ' >
                    <div className='flex flex-col justify-start items-start my-1'>
                        <p className='font-popins font-bold text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Actor</p>
                        <p className='font-popins overflow-hidden text-ellipsis whitespace-nowrap max-w-64 text-gray-500  text-sm sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none group/item2 cursor-pointer'>
                            Fabio Hernandez
                        </p>
                    </div>
                    <div className=' flex-col items-center my-1 bg-red-400 hidden group-hover/item:flex'>
                        <p className='font-popins font-bold text-sm  sm:text-lg lg:text-xl items-center p-0 md:px-2 select-none '>Nacimiento</p>
                        <p className='font-popins cursor-pointer overflow-hidden group/item3 text-center text-xs sm:text-lg lg:text-xl  text-gray-500 select-none'>
                            12/12/2021 
                        </p>
                    </div>
                </div>


            </>


        </>
    );
};

export default CardActor;