import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { createSocioRequest, getAllSociosRequest } from "../api/socio";

interface Socio {
  // Define las propiedades del socio según tu aplicación
  // Por ejemplo, podría ser { id: number; nombre: string; ... }
}

interface SocioContextType {
  error: string[];
  socios: Socio[];
  createSocio: (socio: any) => Promise<void>;
  getAllSocios: () => Promise<void>;
}

export const SocioContext = createContext<SocioContextType | undefined>(
  undefined
);

export const useSocio = (): SocioContextType => {
  const context = useContext(SocioContext);
  if (!context) {
    throw new Error("useSocio must be used within a SocioProvider");
  }
  return context;
};

interface SocioProviderProps {
  children: ReactNode;
}

export const SocioProvider: React.FC<SocioProviderProps> = ({
  children,
}: SocioProviderProps) => {
  const [socios, setSocios] = useState<Socio[]>([]);
  const [error, setError] = useState<string[]>([]);

  const createSocio = async (socio: any) => {
    try {
      const res = await createSocioRequest(socio);
      console.log(res);
      setError([]);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  const getAllSocios = async () => {
    try {
      const res = await getAllSociosRequest();
      setSocios(res.data);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
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

  return (
    <SocioContext.Provider
      value={{
        error,
        socios,
        createSocio,
        getAllSocios,
      }}
    >
      {children}
    </SocioContext.Provider>
  );
};
