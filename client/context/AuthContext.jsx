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

  return (<AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>);
};
