import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = baseURL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const signin = async (userName, email, password) => {
    try {
      const response = await axios.post("/api/auth/signin", {
        userName,
        email,
        password,
      });
      const data = response.data;

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.log(message);
      toast.error(message);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
      email, 
      password,
    });
    const data = response.data;

    if(!data.success) {
      toast.error(data.message);
      return;
    }
    console.log(response.data);
    setToken(data.token);
    setUser(data.user);
    toast.success(data.message);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.log(message);
      toast.error(message);
    }
  }

  const value = {
    token,
    user,
    signin,
    login, 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
