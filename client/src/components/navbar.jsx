
import { Link } from "react-router-dom"
import { Navbar, TextInput } from "flowbite-react"
import {AiOutlineSearch} from 'react-icons/ai'
import { useAuth } from "../context/AuthContext"
import '../input.css'
function Header() {
    //const { isAuthenticated, logout, user } = useAuth()
    return (
        /*<nav className="bg-zinc-700 my-3  flex justify-between py-5 px-10 rounded-lg mx-auto">
            <Link to='/'>
                <h1 className="text-2xl mx-4 font-bold">Mutual Musicos Rosario</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li>
                            Bienvenido {user.username}
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
        </nav>*/
        <>
        <Navbar className="bg-gray border-b-2">
            <Link to="/" className="self-center text-sm whitespace-nowrap sm:text-xl font-semibold">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Home</span>
            </Link>
            <form>
                <TextInput 
                    type="text" 
                    placeholder="Buscar..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
        </Navbar>
        </>
    )
}
export default Header