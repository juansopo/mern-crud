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
            />
        </ThemeProvider>
        
    )
}



function SociosPage() {
    const { getAllSocios, socios } = useSocio();

    useEffect(() => {
        getAllSocios();
    }, []);

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md my-2 py-2 mx-auto">
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-gray-800 text-white mx-auto">
                        <th className="border p-2">NRO ORDEN</th>
                        <th className="border p-2">NOMBRE</th>
                        <th className="border p-2">EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {socios.map((socio, i) => (
                        <tr className="bg-gray-800 " key={i}>
                            <td className="border p-2">{socio.nombre}</td>
                            <td className="border p-2">{socio.nroorden}</td>
                            <td className="border p-2">{socio.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

