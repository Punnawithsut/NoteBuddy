import { useContext } from 'react'
import NavBar from '../components/NavBar.jsx'
import AccountForm from '../components/AccountForm.jsx'
import { AuthContext } from '../context/AuthContext.jsx'

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 
    flex-grow justify-center items-center">
      <AccountForm />
    </div>
  )
}

export default AuthPage;
