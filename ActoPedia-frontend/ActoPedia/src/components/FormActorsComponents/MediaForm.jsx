import React, { useState } from 'react';
import InputField from '../AuthComponents/InputField';
import { useForm } from '../../hooks/useForm';
import { IoIosArrowDown } from "react-icons/io";


const MediaForm = ({ input, tittle, data }) => {

    const [movies, setMovies] = useState([]);
    const { title, personage, description, InputChange, resetForm } = useForm({ title: '', personage: '', description: '' });
    const [expanded, setExpanded] = useState(false);

    const addMovie = () => {
        if (title && personage && description) {
            const formValues = { title, personage, description };
            const newItem = [...movies, formValues]
            setMovies(newItem);
            resetForm();
            data(newItem);
        }
        
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center">
            <button className='flex cursor-pointer rounded-lg bg-slate-100 w-full h-8 items-center justify-center hover:-translate-x-1 duration-500' type="button" onClick={toggleExpand}>
                {expanded ? 'Ocultar' : 'Agregar'} {tittle}
                <IoIosArrowDown />
            </button>
            {expanded && movies.map((movie, index) => (
                <div key={index}>
                    <h3 className='font-bold'>Película {index + 1}</h3>
                    <p className='font-bold'>Título: {movie.title}</p>
                    <p className='font-bold'>Personaje: {movie.personage}</p>
                    <p className='font-bold'>{input} {movie.description}</p>
                </div>
            ))}
            {
                expanded ? (
                    <div className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center">
                        <InputField nameField='Titulo' inputName='title' type='text' inputValue={title} inputOnchage={InputChange} />
                        <InputField nameField='Personaje' inputName='personage' type='text' inputValue={personage} inputOnchage={InputChange} />
                        <InputField nameField='description' inputName='description' type='number' inputValue={description} inputOnchage={InputChange} />
                        <input onClick={addMovie} className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Agregar" />

                    </div>
                ) : null
            }

        </div>
    );
};

export default MediaForm;