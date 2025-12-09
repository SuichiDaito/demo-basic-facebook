
import { createContext, useContext, useEffect }  from "react";
import { useState } from "react";
import { getSavedUser, savedUser, clearSavedUser } from "../services/authServices";

export const AuthContext = createContext();

 export default function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getSavedUser();
        if (user) {
            setUser(user);
        }
     }, []);

    const login  = (data) => {
        savedUser(data);
        setUser(data);
    }

    const logout = () => {
        setUser(null);
        clearSavedUser();
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
 }

 export function useAuth() {
    return useContext(AuthContext);
 }