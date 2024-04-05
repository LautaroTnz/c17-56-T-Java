import React from 'react';
import { FormLogin } from '../../components';

const Login = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>


                <div className='h-[768px]'>

                    <FormLogin />

                </div>



                <div className='bg-primarygrey h-[768px] flex justify-center items-center'>
                    Imagen
                </div>


            </div>
        </div>
    );
};

export default Login;