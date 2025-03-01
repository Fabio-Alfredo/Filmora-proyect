import React, {createContext, useState, useEffect} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token) {
            setToken(token);
            setUser(user);
        }
    }, []);

    const saveToken = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }
    const saveUser = (user) => {
        localStorage.setItem('user', user);
        setUser(user);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, user,  saveToken, removeToken, saveUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {  AuthContext, AuthProvider };