import React from 'react';
import InputField from '../components/AuthComponents/InputField';
import { NavLink } from 'react-router-dom';
import { GiFastBackwardButton } from 'react-icons/gi';

const SignUp = () => {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="flex flex-col min-w-[25%] h-fit py-14 bg-slate-300 rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Sign Up
                    </p>
                    <form className="flex flex-col gap-5 w-4/6 items-center">
                        <InputField nameField="Username" inputName={"name"} type="text" placeH="e.g. NimbusX" />
                        <InputField nameField="Email" inputName={"email"} type="email" placeH="e.g. example@gmail.com" />
                        <InputField nameField="Password" inputName={"password"} type="password" />
                        <button className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-white" type="submit">
                            Sign Up
                        </button>
                        <div className="flex gap-5 font-Roboto mt-2">
                            <p>Ya tienes una cuenta?
                                <NavLink to="/" className="text-cyan-900 pl-1 transition ease-in-out duration-200 hover:text-cyan-400">
                                    Iniciar sesión
                                </NavLink>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;