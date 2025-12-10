import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export function useLogin() {

    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            login({ username, password });
            navigate("/home");
        } else if (username !== 'admin') {
            setError('Invalid username');
        } else if (password !== '1234') {
            setError('Invalid password');
        } else if (username.trim() || password.trim()) {
            setError('Username and password are required');
        } else {
            setError('');
        }
    }

    return { username, password, error, setUsername, setPassword, handleSubmit };
}
