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
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  const value = {
    token,
    user,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
