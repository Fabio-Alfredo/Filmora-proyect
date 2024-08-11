import React, { useState } from 'react';
import ActorData from '../components/FormActorsComponents/ActorData';
import MediaForm from '../components/FormActorsComponents/MediaForm';


const FormActor = () => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [books, setBooks] = useState([]);
    const [voices, setVoices] = useState([]);
    const [actor, setActor] = useState({});

    const handleFileChange = (e) => {
        e.preventDefault();
        const data = {
            actor: actor,
            movies: movies,
            series: series,
            books: books,
            voices: voices
        }

        console.log(data);
    }

    return (
        <div className='flex items-center justify-center w-full bg-color-primary px-6  h-screen'>
            <div className='w-full flex p-4 sm:p-8 shadow-2xl overflow-y-auto rounded-3xl items-center justify-center bg-white max-h-[80%] lg:w-2/3  xl:w-1/2' > {/* query */}
                <form onSubmit={handleFileChange} className="min-w-[25%] max-w-[70%] h-fit py-14 flex flex-col  items-center justify-center gap-6">
                    <ActorData data={setActor}/>
                    <MediaForm input='year' tittle='Peliculas' data={setMovies} />
                    <MediaForm input='temporada' tittle='Series' data={setSeries} />
                    <MediaForm input='libro' tittle='Libros' data={setBooks} />
                    <MediaForm input='voz' tittle='Voces' data={setVoices} />
                    <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign In" />
                </form>
            </div>
        </div>
    );
};

export default FormActor;