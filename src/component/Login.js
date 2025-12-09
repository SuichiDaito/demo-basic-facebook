// import { use, useContext, useState } from "react";
// import { AuthContext } from "../contexts/Authentication";
// import { useNavigate } from "react-router-dom";
import {useLogin} from "../hooks/useLogin";

export default function Login() {

    const {username, password, error, setUsername, setPassword, handleSubmit} = useLogin();

    return (
        <div>
        <h2>Login form</h2>
            <div>
            <input 
                type="text" 
                placeholder="Enter your account"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
                <br></br>
            <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value) }
            ></input>
            </div>
            <button onClick={handleSubmit}>Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
}