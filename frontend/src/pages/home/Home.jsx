import React from 'react'
import { CardRecepcionista, InicioTable } from '../../components'

const data = [
    { nombre: "Adrian", especialidad: "Cirujano", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Monchi", especialidad: "Chaman", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Carlos", especialidad: "Dermatólogo", estado: "Desactivo", mail: "ejemplo@gmail.com" },
    { nombre: "Daniela", especialidad: "Cardiólogo", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Esteban", especialidad: "Neurólogo", estado: "Desactivo", mail: "ejemplo@gmail.com" },
    { nombre: "Fernanda", especialidad: "Oftalmólogo", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Gabriel", especialidad: "Ginecólogo", estado: "Desactivo", mail: "ejemplo@gmail.com" },
    { nombre: "Hugo", especialidad: "Endocrinólogo", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Irene", especialidad: "Urología", estado: "Activo", mail: "ejemplo@gmail.com" },
    { nombre: "Javier", especialidad: "Psiquiatra", estado: "Desactivo", mail: "ejemplo@gmail.com" },
];

function Home() {
    return (
        <div className='flex justify-center'>
            <div className='mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0'>
                <div className='xl:mt-[72px] xl:ml-[50px] xl:flex xl:flex-row xl:gap-x-9 mt-[55px] flex flex-col gap-y-9'>
                    <InicioTable data={data} />
                    <CardRecepcionista />
                </div>
            </div>
        </div>
    )
}

export default Home