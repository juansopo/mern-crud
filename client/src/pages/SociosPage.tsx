/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";


export const Socios = () =>{
  return <h1 >SOPO DEVELOPER</h1>
}


//import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
/*import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import "../input.css";
import { ThemeProvider } from "@mui/material";
import { useSocio } from "../context/SocioContext";
import { darkTheme } from "../themes/dark";

export const TableJson = () => {
  const { getAllSocios, socios } = useSocio();

  useEffect(() => {
    getAllSocios();
  }, []);

  const columns = [
    {
      name: "nroorden",
      label: "Nro Orden",
    },
    {
      name: "nombre",
      label: "Nombre",
    },
    {
      name: "email",
      label: "Email",
    },
  ];
  const options: MUIDataTableOptions = {
    responsive: "standard",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <MUIDataTable
        title={"SOCIOS"}
        data={socios}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
};*/
