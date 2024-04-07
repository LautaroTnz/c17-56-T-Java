import React from 'react';
import { FormLogin } from '../../components';

const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className='xl:grid xl:grid-cols-2'>


                <div className='xl:h-auto xl:w-[683px] w-[360px]'>

                    <FormLogin />

                </div>



                <div className=' hidden xl:w-[683px] w-[360px]
                bg-primarygrey xl:h-auto xl:flex justify-center xl:items-center'>
                    Imagen
                </div>


            </div>
        </div>
    );
};

export default Login;