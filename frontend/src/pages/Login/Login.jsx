import React from 'react';
import { FormLogin } from '../../components';

const Login = () => {
    return (
        <div>
            <div className='xl:grid xl:grid-cols-2'>


                <div className='xl:h-auto'>

                    <FormLogin />

                </div>



                <div className=' hidden
                bg-primarygrey xl:h-auto xl:flex justify-center xl:items-center'>
                    Imagen
                </div>


            </div>
        </div>
    );
};

export default Login;