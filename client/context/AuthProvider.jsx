import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";

const baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = baseURL;

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

      if (!data.success) {
        toast.error(data.message);
        return;
      }

      setToken(data.token);
      setUser(data.user);
      toast.success(data.message);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
    }
  };

  const value = { token, user, signin, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};