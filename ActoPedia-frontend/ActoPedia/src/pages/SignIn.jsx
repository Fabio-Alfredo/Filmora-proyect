import React from 'react';
import InputField from '../components/AuthComponents/InputField';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-l from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="min-w-[25%] h-fit py-14 bg-slate-300 flex flex-col rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Sign In
                    </p>
                    <form className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center"  >
                        <InputField nameField="email" inputName={"email"} type="text" placeH="e.g. NimbusX" />
                        <InputField nameField="Password" inputName={"password"} type="password" />
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign In" />
                        <div className="flex gap-5 font-Roboto mt-2">
                            <p>Aun no tienes una cuenta?
                                <NavLink to="/SignUp" className="text-cyan-900 pl-1 transition ease-in-out duration-200 hover:text-cyan-400">
                                    Registrarse
                                </NavLink>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;