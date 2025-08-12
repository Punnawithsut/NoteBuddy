import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import NavBar from "../components/NavBar.jsx";
import HomePage from "../pages/HomePage.jsx";

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={authUser ? <Navigate to="/" /> : <AuthPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
