import React from 'react';

const HeaderInfo = ({name, year, image}) => {
    return (
        <>
            <div className='w-full px-10 py-6 flex items-center justify-center '>
                <img className='rounded-sm w-20 h-20' src={image} />
                <div className='px-6'>
                    <h3 className='font-bold text-4xl'>{name}</h3>
                    <p className='text-2xl'>Edadd <span>{year}</span></p>
                </div>
            </div>
        </>
    );
};

export default HeaderInfo;