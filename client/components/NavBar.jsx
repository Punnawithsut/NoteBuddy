import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  const { authUser, logout } = useContext(AuthContext)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl h-10 mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-blue-600">
          MyApp
        </Link>

        <div className="flex items-center gap-4">
          {authUser ? (
            <>
              <span className="text-gray-700">Hi, {authUser.username}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar