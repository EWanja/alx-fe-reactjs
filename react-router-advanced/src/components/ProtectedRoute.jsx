import React from "react"
import { Navigate } from "react-router-dom"


function useAuth() {
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth()

  if (!isAuth) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
