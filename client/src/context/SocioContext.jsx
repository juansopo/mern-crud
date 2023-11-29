/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createSocioRequest, getAllSociosRequest } from "../api/socio.js";

export const SocioContext = createContext()

export const useSocio = () => {
  const context = useContext(SocioContext);
  if (!context) {
    throw new Error("useSocio must be used within an SocioProvider")
  }
  return context;
}


export const SocioProvider = ({ children }) => {
  const [socios, setSocios] = useState([])
  const [error, setError] = useState([]);

  const createSocio = async (socio) => {
    try {
      const res = await createSocioRequest(socio)
      console.log(res)
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)
    }
  }
  const getAllSocios = async () => {
    try {
      const res = await getAllSociosRequest()
      console.log(res.data)
      setSocios(res.data)
    } catch (error) {
      console.log(error.response.data)
      setError(error.response.data)
    }
  }


  return (
    <SocioContext.Provider
      value={{
        socios,
        createSocio,
        getAllSocios,
      }}
    >
      {children}
    </SocioContext.Provider>
  )
}

