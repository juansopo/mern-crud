/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// @ts-ignore
//import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import MUIDataTable from 'mui-datatables'
import "../input.css";

import { useSocio } from "../context/SocioContext";


const columns = ["Nro Orden", "Nombre", "Email"]

const options = { filterType: 'checkbox', }

export const Tabla = () => {

    const { getAllSocios, socios } = useSocio();

    useEffect(() => {
        getAllSocios();
    }, []);

    console.log(socios)
    const data = socios.map(socio => 
        [socio.nroorden, socio.nombre, socio.email])



    return (<MUIDataTable
        title={"Manuel Primo"}
        columns={columns}
        data={data}
        options={options}
    />)
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

export default Tabla;
