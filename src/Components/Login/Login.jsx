import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        
       
        if (!username || !password) {
            setErrorMessage('Please enter username and password.');
            return;
        }

        
        if (username === 'user' && password === 'password') {
            setErrorMessage('');
            alert('Login successful!');
          
        } else {
            setErrorMessage('Incorrect username or password. Please try again.');
        }
    };

    return (
        <div className='Login'>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock />
                </div>
                <div className="remember">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <a href='#'>Forgot password</a>
                </div>
                <button type='submit'>Login</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="register">
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
