
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

 export default function AuthProvider ({children}) {

    const [user, setUser] = useState('');

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

     const login = (user) => {
            setUser(user);
            localStorage.setItem('user', JSON.stringify({user}));
        };

        const logout = () => {
            setUser(null);
        };  

return (
        <AuthProvider.Provider value={{user, login, logout}}>
            {children}
        </AuthProvider.Provider>
);}
