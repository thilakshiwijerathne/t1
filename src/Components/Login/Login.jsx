import React, { useEffect } from 'react';
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



const Login = () => {

    useEffect(() => {
        
        document.body.classList.add('login-page');
    
        
        return () => {
          document.body.classList.remove('login-page');
        };
      }, []);

  return (
    <div className='Login'>
        <form action="">
            <h3>Login</h3>
            <div className="input-box">
                <input type="text" placeholder='username' required/>
                <FaUser />
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
                <FaLock />
            </div>
            <div className="remember">
                <label><input type="checkbox" /> Remember me </label>
                <a href='#'>Fogot password</a>
            </div>
            <button type='submit'>Login</button>
            <div className="register">
                <p>Dont have an account? <a href='#'>Register</a></p>
            </div>


        </form>
      
    </div>
  )
}

export default Login
