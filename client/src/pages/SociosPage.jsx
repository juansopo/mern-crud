/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import '../input.css';
import { useSocio } from "../context/SocioContext"
function SociosPage() {

    const { getAllSocios, socios } = useSocio();


    useEffect(() => {
        getAllSocios();
    },[])

    return (
        <div>
            <table className="hover:table-fixed">
                <thead>
                    <tr>
                        <th>NRO ORDEN</th>
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>     
                <tbody>
                {
                    socios.map((socio, i) => (
                        <tr key={i}>
                            <td>{socio.nombre}</td>
                            <td>{socio.nroorden}</td>
                            <td>{socio.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default SociosPage