import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from "../api/auth.js";


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

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  }

  const signin = async (user) =>{
    try {
      const res = await loginRequest(user)
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
      console.log(error)
    }
  }


  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};
