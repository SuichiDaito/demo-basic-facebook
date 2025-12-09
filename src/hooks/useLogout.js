import { useAuth } from "../contexts/AuthContext";
import {useNavigate}  from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const {logout} = useAuth();

    function handleLogout(e) {
        e.preventDefault();
        logout();
        navigate('/login');
    }

    return {handleLogout};
 }