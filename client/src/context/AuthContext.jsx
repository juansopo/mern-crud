import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookie from 'js-cookie'


export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}




// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const logout = async () =>{
    Cookie.remove('token');
    setIsAuthenticated(false)
    setUser(null)
  }

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res)
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data)

    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
      console.log(error)
    }
  }

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([])
      }, 5000);
      return () => clearTimeout(timer)
    }
  }, [error])

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookie.get()

      if (!cookie.token) {
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
        return;
      }

      try {
        const res = await verifyTokenRequest(cookie.token)

        if (!res.data) {
          setIsAuthenticated(false)
          setUser(null)
          setLoading(false)
          return;
        }
        setLoading(false)
        setIsAuthenticated(true)
        setUser(res.data)
        
      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
      }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        error,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};
