import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const InformationUser = ({user}) => {

    const { removeToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/');
    }

    return (
        <>
            <div className='w-full justify-start mb-8 px-[20%]'>
                <div className='h-fit'>
                    <p className='font-bold text-xl'>{user.name}</p>
                    <p>{user.email}</p>
                    <input onClick={handleLogout} className="bg-black min-w-[15%] p-2 cursor-pointer text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign Up" />
                </div>
            </div>
        </>
    );
};

export default InformationUser;