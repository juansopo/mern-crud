
import { Link, useLocation } from "react-router-dom"
import { Navbar, TextInput, Button } from "flowbite-react"
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useAuth } from "../context/AuthContext"
import '../input.css'
function Header() {
    const path = useLocation().pathname;
    //const { isAuthenticated, logout, user } = useAuth()
    return (
        <Navbar className=" bg-gray border-b-2">
            <Link to="/" className="self-center text-sm whitespace-nowrap sm:text-xl font-semibold">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Home</span>
            </Link>
            <form className="flex gap-2 md:order-2">
                <TextInput 
                    type="text" 
                    placeholder="Buscar..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            <Button className="w-12 h-10 lg:hidden" color='gray'>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2">
                <Button className="w-12 h-10 hidden sm:inline" color="gray">
                    <FaMoon />
                </Button>
                <Link to="/login">
                    <Button color="gray">
                        Iniciar sesion
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>


            <Navbar.Collapse>
                <Navbar.Link active={path === '/register'} as={'div'}>
                    <Link to="/register">
                        Registrarse
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
    )
}
export default Header