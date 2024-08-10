import React from 'react';

const HeaderInfo = () => {
    return (
        <>
            <div className='w-full px-10 py-6 flex items-center justify-center '>
                <img className='rounded-sm w-20 h-20' src='https://www.unicef.org/sites/default/files/styles/media_large_image/public/UN0318726_CRC30_SP.jpg.webp?itok=5V7HpisK' />
                <div className='px-6'>
                    <h3 className='font-bold text-4xl'>Fabio Hernandez</h3>
                    <p className='text-2xl'>Edadd <span>18</span></p>
                </div>
            </div>
        </>
    );
};

export default HeaderInfo;