import { Link } from "react-router-dom"
import { useState } from "react"

function FormLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el envío del formulario

        // Verifica si las credenciales coinciden con las hardcoded
        if (email === 'admin@gmail.com' && password === 'admin') {
            // Redirige al usuario a la página de inicio
            window.location.href = "/inicio";
        } else {
            setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
            // Limpia los campos de email y contraseña
            setEmail('');
            setPassword('');
        }
    };


    return (
        <div className='mr-4 ml-4 mt-20 xl:mr-4 xl:ml-4 xl:mt-0 flex xl:justify-center xl:items-center h-screen'>
            <div className='flex flex-col w-[400px] h-[488px]'>
                <h1 className='text-[26.27px] font-bold text-primarygrey mb-[75px]'>MYDOCTORAPP</h1>
                <h2 className='text-[26.27px] font-bold text-primarygrey mb-[38px]'>Iniciar sesión</h2>
                <div>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <label className='text-[16px] text-primarygrey mb-[10px]' htmlFor="email">E-mail</label>
                        <input
                            className='w-full h-[50px] border border-primarygrey rounded-[5px] mb-[26px]'
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className='text-[16px] text-primarygrey mb-[10px]' htmlFor="password">Contraseña</label>
                        <input
                            className='w-full h-[50px] border border-primarygrey rounded-[5px] mb-[26px]'
                            type="password"
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="bg-primarygrey text-white font-bold py-2 px-4 rounded mb-[40px]">
                            Continuar
                        </button>
                        {error && <p className="text-red-500 mt-[-28px]">{error}</p>}
                    </form>
                    <div className='w-full h-[16px] text-center'>
                        <h1 className='text-primarygrey text-3.5 lx:text-4'>¿Olvidaste tu contraseña? <a className='underline font-bold text-3.5 lx:text-4' href="">Restablecer contraseña</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormLogin