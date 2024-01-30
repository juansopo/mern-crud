/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// @ts-ignore
//import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import MUIDataTable from 'mui-datatables'
import "../input.css";
import {createTheme, ThemeProvider} from "@mui/material"
import { useSocio } from "../context/SocioContext";

export const darkTheme = createTheme({
    palette:{
        mode: 'dark'
    }
})

export const TableJson = () =>{

    const { getAllSocios, socios } = useSocio();

    useEffect(() => {
        getAllSocios();
    }, []);

    const columns = [
        {
            name: "nroorden",
            label: "Nro Orden"
        },
        {
            name: "nombre",
            label: "Nombre"
        },
        {
            name: "email",
            label: "Email"
        }
    ]
    const options ={
        responsive: 'standard',
    }

    return(
        <ThemeProvider theme={darkTheme}>
            <MUIDataTable
            title={"SOCIOS"}
            data={socios}
            columns={columns}
            options={options}
            className="mx-4 my-4"
            />
        </ThemeProvider>
        
    )
}

