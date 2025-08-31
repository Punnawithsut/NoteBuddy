import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const AccountForm = () => {
  const { signin } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(userName, email, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor='usernameInput'>Username: </label>
        <input onChange={(e)=>setUserName(e.target.value)} id='usernameInput' type='text' value={userName} required></input>
        <label htmlFor='emailInput'>Email: </label>
        <input onChange={(e)=>setEmail(e.target.value)} id='emailInput' type='email' value={email} required></input>
        <label htmlFor='passwordInput'>Password: </label>
        <input onChange={(e)=>setPassword(e.target.value)} id='passwordInput' type='password' value={password} required></input>
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default AccountForm
