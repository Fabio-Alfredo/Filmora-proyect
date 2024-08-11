import React, { useState } from 'react';
import ActorData from '../components/FormActorsComponents/ActorData';
import MediaForm from '../components/FormActorsComponents/MediaForm';


const FormActor = () => {
    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full flex p-4 sm:p-8 shadow-2xl overflow-y-auto rounded-3xl items-center justify-center bg-white max-h-[80%] lg:w-2/3  xl:w-1/2' > {/* query */}
                <div className="min-w-[25%] max-w-[70%] h-fit py-14 flex flex-col  items-center justify-center gap-6">
                    <ActorData />
                    <MediaForm  />
                </div>
            </div>
        </div>
    );
};

export default FormActor;