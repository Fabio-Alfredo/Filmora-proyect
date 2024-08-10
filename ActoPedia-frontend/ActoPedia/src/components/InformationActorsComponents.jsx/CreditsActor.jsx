import React from 'react';
import DetailList from './DetailList';

const CreditsActor = ({titulo = 'peliculas', peliculas, libros, series, book }) => {
    return (
        <>
            <div className='px-10 py-6'>
                <h2 className='text-3xl font-bold pb-4 text-center'>{titulo}</h2>
                <div className='flex justify-between px-4'>
                    <DetailList title='Peliculas' info='Pedro Picapiedra' />
                    <DetailList title='Personajes' info='Pablo' />
                    <DetailList title='Lanzamiento' info='2000' />
                    {
                        book ? <DetailList title='Autor' info='Pedro Picapiedra' /> : null
                    }{
                        series ? <DetailList title='Temporadas' info='5' /> : null
                    }
                </div>
            </div>
        </>
    );
};

export default CreditsActor;