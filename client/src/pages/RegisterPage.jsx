import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth';
function RegisterPage() {

    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values);
        console.log(res);
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md my-2 py-2 '>
            <form onSubmit={onSubmit}>
                <input type="text" {...register('username', { required: true, minLength: 3 })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Usename'
                />
                <input type="text" {...register('email', { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                <input type="text" {...register('password', { required: true, minLength: 6})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Password'
                />
                <button type="submit" 
                className='w-mid bg-zinc-700 text-white px-4 py-2 rounded-md my-2 '>
                    Register
                </button>
            </form>
        </div>
    )
}
export default RegisterPage;