import React from 'react';
import DetailList from './DetailList';

const CreditsActor = ({ titulo = 'peliculas', data }) => {

    console.log(data);
    return (
        <>
            {
                data.length > 0 ? (
                    <div className='px-10 py-6'>
                        <h2 className='text-3xl font-bold pb-4 text-center'>{titulo}</h2>
                        <div className='grid grid-cols-3 '>
                            <h3 className='text-2xl font-bold pb-2 '>{titulo}</h3>
                            <h3 className='text-2xl font-bold pb-2'>personaje</h3>
                            <h3 className='text-2xl font-bold pb-2'>descripcion</h3>
                        </div>
                        <div className='flex flex-col w-full '>
                            {
                                data.map(i => (
                                    <div className=' w-full grid grid-cols-3 '>
                                        <DetailList key={i.id} title='Peliculas' info={i.title} />
                                        <DetailList key={i.id} title='Personajes' info={i.personage} />
                                        <DetailList key={i.id} title='Descripcion' info={i.description} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

export default CreditsActor;