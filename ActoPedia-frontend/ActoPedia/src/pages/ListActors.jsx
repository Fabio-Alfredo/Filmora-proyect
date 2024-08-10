import React from 'react';
import CardActor from '../components/ListActorsComponent.jsx/CardActor';

const ListActors = () => {
    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
        <div className='w-full p-4 sm:p-8 shadow-2xl rounded-3xl bg-white h-fit lg:w-2/3  xl:w-1/2' > {/* query */}
            <hr className='h-0.5 bg-black mb-6 mx-4' />
                <div className='overflow-y-auto h-[35vh] md:h-[50vh] px-4'>
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                   <CardActor />
                </div>
            <hr className='h-0.5 bg-black my-8 mx-4' />
        </div>
    </div>
    );
};

export default ListActors;