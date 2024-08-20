import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
    const {isAuthenticated, logout} = useAuth();
    return(
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
            <Link to='/'>
                <h1 className="text-2xl font-bold" >SopoDev</h1>
            </Link>
            <ul className="flex gap-x-2">
                {!isAuthenticated ? (
                    <>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/login'>Login</Link>
                    </button>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/register' >Registrarse</Link>
                    </button>
                    </>
                ):(
                    <>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/gastos' >Gastos</Link>
                    </button>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/ingresos' >Ingresos</Link>
                    </button>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/profile'>Perfil</Link>
                    </button>
                    <button className="bg-zinc-300 rounded-lg p-2 text-zinc-700">
                        <Link to='/' onClick={() => logout()}>Salir</Link>
                    </button>
                    </>
                )}
            </ul>

        </nav>
    )
}

export default Navbar;