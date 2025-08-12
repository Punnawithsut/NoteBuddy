import { useContext } from 'react'
import NavBar from '../components/NavBar.jsx'
import AccountForm from '../components/AccountForm.jsx'
import { AuthContext } from '../context/AuthContext.jsx'

const AuthPage = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <AccountForm />
    </div>
  )
}

export default AuthPage;
