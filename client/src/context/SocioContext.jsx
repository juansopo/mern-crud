/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const SocioContext = createContext()

export const useSocio = () => {
    const context = useContext(SocioContext);
    if (!context) {
      throw new Error("useSocio must be used within an SocioProvider")
    }
    return context;
}


export const SocioProvider = ({children}) =>{

    return (
        <SocioContext.Provider
          value={{
            
          }}
        >
          {children}
        </SocioContext.Provider>
      )
}

