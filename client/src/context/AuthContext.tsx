import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookie from 'js-cookie';
// TODO: implementar tipo de User
interface User {
  // Define las propiedades del usuario según tu aplicación
  // Por ejemplo, podría ser { id: number; username: string; email: string; }
}

interface AuthContextType {
  signup: (user: any) => Promise<void>;
  signin: (user: any) => Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
  error: string[];
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const logout = async () => {
    Cookie.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const signup = async (user: any) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  };

  const signin = async (user: any) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookie.get();

      if (!cookie.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookie.token);

        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }
        setLoading(false);
        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

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
  );
};
