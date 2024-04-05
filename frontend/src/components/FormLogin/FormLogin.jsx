import React from 'react'

function FormLogin() {
    return (
        <div className='flex justify-center items-center h-screen'>


            <div className='flex flex-col w-[400px] h-[488px]'>

                <h1 className='text-[26.27px] font-bold text-primarygrey mb-[75px]'>MYDOCTORAPP</h1>

                <h2 className='text-[26.27px] font-bold text-primarygrey mb-[38px]'>Iniciar sesión</h2>

                <div >
                    <form className='flex flex-col' action="">

                        <label className='text-[16px] text-primarygrey mb-[10px]'
                            htmlFor="email">E-mail</label>
                        <input className='w-full h-[50px] border border-primarygrey rounded-[5px] mb-[26px]'
                            type="email" id='email' required />

                        <label className='text-[16px] text-primarygrey mb-[10px]'
                            htmlFor="password">Contraseña</label>
                        <input className='w-full h-[50px] border border-primarygrey rounded-[5px] mb-[26px]'
                            type="password" id='password' required />

                        <button type="submit" className="bg-primarygrey text-white font-bold py-2 px-4 rounded mb-[40px]">
                            Continuar
                        </button>

                    </form>

                    <h1 className='text-primarygrey'>¿Olvidaste tu contraseña? <a className='underline font-bold' href="">Restablecer contraseña</a></h1>
                </div>

            </div>


        </div>
    )
}

export default FormLogin