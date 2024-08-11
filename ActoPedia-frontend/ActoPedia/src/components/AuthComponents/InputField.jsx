const InputField = ({ nameField = "", type = "", placeH = "", inputName, inputValue, inputOnchage }) => {


    return (

        <>
            <label className="w-full">
                <span className={`font-Nunito font-medium text-lg self-start 'text-white'}`}>{nameField}</span>
                <input className="p-3 min-w-full bg-slate-200/55 text-white font-Nunito ring-2 ring-white rounded-lg transition ease-in-out duration-200 focus:bg-slate-950/70 focus:outline-slate-950 focus:shadow-2xl focus:shadow-slate-200 " required type={type} name={inputName} placeholder={placeH} value={inputValue} onChange={inputOnchage} />
            </label>
        </>
    );
};

export default InputField;