
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { getSavedUser, savedUser, clearUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        const user = getSavedUser();
        if (user) {
            setUser(user);
        }
    }, []);

    const login = (data) => {
        savedUser(data);
        setUser(data);
        // navigate("/home");
    }

    const logout = () => {
        setUser(null);
        clearUser();
        // navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}