import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const InformationUser = () => {

    const { removeToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    return (
        <>
            <div className='w-full justify-start mb-8 px-[20%]'>
                <p>name</p>
                <p>email</p>
                <p onClick={handleLogout}>logout</p>
            </div>
        </>
    );
};

export default InformationUser;