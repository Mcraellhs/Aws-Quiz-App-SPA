import React, { useState } from 'react'
import '../css/login.css'
import { userService } from '../services/UserService';

export default function Register() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        userService.register({username,password})
        .then(()=>{
            alert("register successful")
        })
        .catch(()=>{
            alert("Error")
        });
        
      };

  return (
    <form >
    <div className='login-form-group'>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </div>
    <div className='login-form-group'>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <div>
      <button onClick={handleSubmit} className='login-btn' type="submit">Register</button>
    </div>
  </form>
  )
}
