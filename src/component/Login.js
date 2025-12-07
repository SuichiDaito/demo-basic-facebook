import { useState } from "react";

export default function Login({onLogin}) {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('') 

function handleLogin() {
    if (username === 'admin' && password === '1234') {
        const userData = {username};
        localStorage.setItem('user', JSON.stringify(userData));
        onLogin(username);
    } else {
    if (username !== 'admin') {
            setError('Invalid username');
        } else if (password !== '1234') {
            setError('Invalid password');
        } else {
            setError('');
        }
    }
}

    return (
        <div>
        <h2>Login form</h2>
            <form>
                <input 
                type="text" 
                placeholder="Enter your account"
                onChange={(e) => setUser(e.target.value)}
                ></input>
                <br></br>
                <input 
                type="password" 
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </form>
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}