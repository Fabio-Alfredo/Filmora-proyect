import React, { useState } from 'react';
import InputField from '../AuthComponents/InputField';
import { useForm } from '../../hooks/useForm';
import { IoIosArrowDown } from "react-icons/io";


const MediaForm = ({ input, tittle, data }) => {

    const [movies, setMovies] = useState([]);
    const { title, personage, year, InputChange, resetForm } = useForm({ title: '', personage: '', year: '' });
    const [expanded, setExpanded] = useState(false);

    const addMovie = () => {
        if (title && personage && year) {
            const formValues = { title, personage, year };
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
            <button className='flex cursor-pointer hover:-translate-x-1 duration-500' type="button" onClick={toggleExpand}>
                {expanded ? 'Ocultar' : 'Agregar'} {tittle}
                <IoIosArrowDown />
            </button>
            {expanded && movies.map((movie, index) => (
                <div key={index}>
                    <h3 className='font-bold'>Película {index + 1}</h3>
                    <p className='font-bold'>Título: {movie.title}</p>
                    <p className='font-bold'>Personaje: {movie.personage}</p>
                    <p className='font-bold'>{input} {movie.year}</p>
                </div>
            ))}
            {
                expanded ? (
                    <div className='gap-5'>
                        <InputField inputName='title' type='text' inputValue={title} inputOnchage={InputChange} />
                        <InputField inputName='personage' type='text' inputValue={personage} inputOnchage={InputChange} />
                        <InputField inputName='year' type='number' inputValue={year} inputOnchage={InputChange} />
                        <button type="button" onClick={addMovie}>Agregar Película</button>
                    </div>
                ) : null
            }

        </div>
    );
};

export default MediaForm;