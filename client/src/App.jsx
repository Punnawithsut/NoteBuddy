import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
import { useContext } from "react";
import NavBar from "../components/NavBar.jsx";
import HomePage from "../pages/HomePage.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={user ? <Navigate to="/" /> : <AuthPage />}
            />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
