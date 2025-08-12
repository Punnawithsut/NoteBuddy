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
      {authUser && <NavBar />}
      <Routes>
        <Route 
        path="/" 
        element={authUser ?  <Navigate to='/home'/>: <AuthPage />}
        />
        <Route 
        path="/home"
        element={authUser ?  <HomePage />: <Navigate to='/'/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
