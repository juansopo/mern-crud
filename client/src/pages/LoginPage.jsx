import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const navigate = useNavigate();

    const { signin, isAuthenticated, error: signinError } = useAuth()

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(data => {
        signin(data);
    })
    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md my-2 py-2 '>
            {
               signinError.map((error, i) => (
                    <div className='flex justify-center items-center' key={i}>
                        <p className='text-red-500 '>{error}</p>
                    </div>
                ))
            }
            <h1 className='flex justify-center items-center font-bold'>LOGIN</h1>
            <form className='flex h-full items-center justify-center flex-col ' onSubmit={onSubmit}>
                <div className="textInputWrapper">
                    <input {...register('email', { required: true })} placeholder="Email" type="email" className="textInput" name='email' />
                </div>
                {errors.email &&
                    <p className='text-red-500'>Email is required</p>
                }
                <div className="textInputWrapper" >
                    <input  {...register('password', { required: true, minLength: 6 })} placeholder="Password" type="password" className="textInput" name='password' />
                </div>
                {errors.password && (
                    <p className='text-red-500'>
                        {errors.password.type === 'required'
                            ? 'Password is required'
                            : 'Password must be at least 6 characters'}
                    </p>
                )}
                <button className="relative py-2 my-4 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                    Register
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                ¿No tienes una cuenta?<Link to="/register" className="text-sky-500">Registrarse</Link>
            </p>
        </div>

    )
}
export default LoginPage;