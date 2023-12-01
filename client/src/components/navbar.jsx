import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import '../input.css'
function Navbar() {
    const { isAuthenticated, logout, user } = useAuth()
    return (
        <nav className="bg-zinc-700 my-3  flex justify-between py-5 px-10 rounded-lg mx-auto">
            <Link to='/'>
                <h1 className="text-2xl mx-4 font-bold">Mutual Musicos Rosario</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.nombre}
                        </li>
                        <li>
                            <Link to='/add-socio'>Agregar Socio</Link>
                        </li>
                        <li>
                            <Link to='/login' onClick={() => { logout() }}>Cerrar sesion</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="bg-indigo-500 mx-4 px-4 py-1 rounded-lg">Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link to='/register' className="bg-indigo-500 mx-4 px-4 py-1 rounded-lg">Registrarse</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
export default Navbar