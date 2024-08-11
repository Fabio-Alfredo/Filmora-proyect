import React, { useState } from 'react';
import InputField from '../AuthComponents/InputField';

const MediaForm = ({input}) => {
    const [movies, setMovies] = useState([]);

    const [newMovie, setNewMovie] = useState({ title: '', personage: '', year: '' });
    const [expanded, setExpanded] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const addMovie = () => {
        if (newMovie.title && newMovie.personage && newMovie.year) {
            setMovies([...movies, newMovie]);
            setNewMovie({ title: '', personage: '', year: '' });
        }
    };

    return (
        <form >
            <button type="button" onClick={toggleExpand}>
                {expanded ? 'Compactar' : 'Expandir'} Películas
            </button>
            {expanded && movies.map((movie, index) => (
                <div key={index}>
                    <h3>Película {index + 1}</h3>
                    <p>Título: {movie.title}</p>
                    <p>Personaje: {movie.personage}</p>
                    <p>Año: {movie.year}</p>
                </div>
            ))}
            {
                expanded?(
                    <div>
                        <InputField inputName='title' type='text' inputValue={newMovie.title} inputOnchage={handleInputChange}  />
                        <InputField inputName='personage' type='text' inputValue={newMovie.personage} inputOnchage={handleInputChange} />
                        <InputField inputName='year' type='number' inputValue={newMovie.year} inputOnchage={handleInputChange} />
                        <button type="button" onClick={addMovie}>Agregar Película</button>
                    </div>
                ): null
            }

        </form>
    );
};

export default MediaForm;