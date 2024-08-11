import React, { useState } from 'react';
import InputField from '../AuthComponents/InputField';
import { useForm } from '../../hooks/useForm';

const ActorData = ({ data }) => {

    const [image, setImage] = useState(null);
    const { name, age, biography, InputChange } = useForm({ name: '', age: '', biography: '' });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                onDataChange(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
        const formValues = { name, age, biography, image };
        data(formValues);
    };

    return (
        <>
            <div className="flex flex-col gap-5 w-4/5 3xl:w-3/4 items-center"   >
                <InputField nameField="Nombre" inputName={"name"} type="text" inputValue={name} inputOnchage={InputChange} placeH="e.g. NimbusX" />
                <InputField nameField="Edad" inputName={"age"} type="text" inputValue={age} inputOnchage={InputChange} />
                <InputField nameField='Fotografia' inputName={"image"} type="file" inputOnchage={handleFileChange} />
                <div className='w-full'>
                    <span className={`font-Nunito font-medium text-lg self-start 'text-white'}`}>biography</span>
                    <textarea className="p-3 min-w-full bg-slate-200/55 text-white font-Nunito ring-2 ring-white rounded-lg transition ease-in-out duration-200 focus:bg-slate-950/70 focus:outline-slate-950 focus:shadow-2xl focus:shadow-slate-200 "
                        name="biography" type="textarea" value={biography} onChange={InputChange} placeholder="e.g. Actor de doblaje" />
                </div>
                {/* <input className="bg-black min-w-[50%] p-4 text-white font-Roboto self-end rounded-xl mt-6 hover:bg-slate-100/70 hover:text-black transition ease-in-out duration-200 hover:ring-2 hover:ring-black" type="submit" value="Enviar" /> */}
            </div>
        </>
    );
};

export default ActorData;