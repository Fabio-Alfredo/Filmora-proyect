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
                        <div className='flex justify-between px-4'>
                            {
                                data.map(i => (
                                    <>
                                        <DetailList key={i.id} title='Peliculas' info={i.title} />
                                        <DetailList key={i.id} title='Personajes' info={i.personage} />
                                        <DetailList key={i.id} title='Lanzamiento' info={i.year} />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                ): null
            }
        </>
    );
};

export default CreditsActor;