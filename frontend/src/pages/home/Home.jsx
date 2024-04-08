import React from 'react'
import { CardRecepcionista, CardUniones, InicioTable } from '../../components'

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

const especialidades = [
    { nombre: 'Cirujano', porcentaje: 55 },
    { nombre: 'Ortopedico', porcentaje: 65 },
    { nombre: 'Ginecologo', porcentaje: 85 },
    { nombre: 'Dermatólogo', porcentaje: 70 },
    { nombre: 'Pediatra', porcentaje: 60 },
    { nombre: 'Cardiólogo', porcentaje: 75 },
    { nombre: 'Neurólogo', porcentaje: 80 },
    { nombre: 'Endocrinólogo', porcentaje: 68 },
    { nombre: 'Oftalmólogo', porcentaje: 72 },
    { nombre: 'Psiquiatra', porcentaje: 78 }
];

const estadisticas1 = {
    titulo: 'Pacientes',
    pacientes: '105K',
    descripcion: '100 pacientes se unieron esta semana'
};

const estadisticas2 = {
    titulo: 'Doctores',
    pacientes: '50+',
    descripcion: '3 doctores se crearon esta semana'
};

const estadisticas3 = {
    titulo: 'Recepcionistas',
    pacientes: '105+',
    descripcion: '10 recepcionistas se crearon esta semana'
};

function Home() {
    return (
        <div className='flex justify-center'>
            <div className='mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0'>
                <div className='xl:mt-[52px] xl:ml-[30px] xl:flex  mt-[55px] flex flex-col '>
                    <div className='xl:flex xl:flex-row flex flex-col gap-y-9 xl:gap-x-9'>
                        <InicioTable data={data} />
                        <CardRecepcionista especialidades={especialidades} />
                    </div>

                    <div className='xl:mt-9 xl:flex xl:flex-row xl:gap-8 flex flex-col gap-9 mt-9 mb-9'>
                        <CardUniones estadisticas={estadisticas1} />
                        <CardUniones estadisticas={estadisticas2} />
                        <CardUniones estadisticas={estadisticas3} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home