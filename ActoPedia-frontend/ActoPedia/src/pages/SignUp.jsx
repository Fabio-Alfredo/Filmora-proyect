import React from 'react';
import InputField from '../components/AuthComponents/InputField';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { register } from '../services/Auth.service';
import Swal from 'sweetalert2';


const SignUp = () => {

    const navigate = useNavigate();
    const { name, email, password, InputChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name,
                email,
                password
            }
            const res = await register(data);
            console.log(res);
            Swal.fire({
                position: "center",
                icon: "Genial",
                title: "Usuario registrado",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                navigate('/');
            })

        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${error.error}`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-stone-950 via-stone-900 to-stone-600 bg-300% animate-gradient">
                <div className="flex flex-col min-w-[25%] h-fit py-14 bg-slate-300 rounded-xl shadow-2xl shadow-slate-400 items-center justify-center gap-6">
                    <p className="font-Bebas text-4xl">
                        Sign Up
                    </p>
                    <form className="flex flex-col gap-5 w-4/6 items-center" onSubmit={handleSignUp}>
                        <InputField nameField="Username" inputName={"name"} type="text" placeH="e.g. NimbusX" inputValue={name} inputOnchage={InputChange} />
                        <InputField nameField="Email" inputName={"email"} type="email" placeH="e.g. example@gmail.com" inputValue={email} inputOnchage={InputChange} />
                        <InputField nameField="Password" inputName={"password"} type="password" inputValue={password} inputOnchage={InputChange} />
                        <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Sign Up" />
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