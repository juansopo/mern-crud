import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth.js";


export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}




// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (user) => {
    const res = await registerRequest(user);
    setUser(res.data);
  }


  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};
