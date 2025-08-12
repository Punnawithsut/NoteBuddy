import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = baseURL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const signin = async ({ userName, email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signin", {
        userName,
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message || "User Created Successfully");
      } else {
        toast.error(res.data.message || "Cannot Create User");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (!res.data.success) {
        toast.error(res.data.message);
        return;
      }
      const { token, user } = res.data;
      setToken(token);
      setUser(user);

      const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", expiresAt.toString());

      toast.success(res.data.message || "Logged in successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    token,
    loading,
    signin,
    login,
  };

  return (<AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>);
};
