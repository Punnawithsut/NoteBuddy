import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const AccountForm = () => {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <label htmlFor='usernameInput'>Username: </label>
        <input id='usernameInput' type='text' required></input>
        <label htmlFor='emailInput'>Email: </label>
        <input id='emailInput' type='email' required></input>
        <label htmlFor='passwordInput'>Password: </label>
        <input id='passwordInput' type='password' required></input>
        <button>Login</button>
      </form>
    </div>
  )
}

export default AccountForm
