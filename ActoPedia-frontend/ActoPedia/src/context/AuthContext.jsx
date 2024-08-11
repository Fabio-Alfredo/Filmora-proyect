import React, {createContext, useState, useEffect} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    }, []);

    const saveToken = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, saveToken, removeToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };