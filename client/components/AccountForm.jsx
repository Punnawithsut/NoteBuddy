import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const AccountForm = () => {
  const { signin, login } = useContext(AuthContext);

  const [selectedLogin, setSelectedLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedLogin) {
      login(email, password);
    } else {
      signin(userName, email, password);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{selectedLogin ? "Log In" : "Sign In"}</h1>
        {!selectedLogin && (
          <>
            <label htmlFor="usernameInput">Username: </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              id="usernameInput"
              type="text"
              value={userName}
              required
            ></input>
          </>
        )}
        <label htmlFor="emailInput">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="emailInput"
          type="email"
          value={email}
          required
        ></input>
        <label htmlFor="passwordInput">Password: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="passwordInput"
          type="password"
          value={password}
          required
        ></input>
        <button>{selectedLogin? "Log In" : "Sign In"}</button>
      </form>
      {selectedLogin && <p>Dont have an account yet?</p>}
      {!selectedLogin && <p>Already have an account?</p>}
      <button onClick={()=>{setSelectedLogin(!selectedLogin)}}>
        {selectedLogin? "Click here" : "Click here"}
      </button>
    </div>
  );
};

export default AccountForm;
