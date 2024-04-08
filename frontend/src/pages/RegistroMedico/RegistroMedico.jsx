import React from 'react'
import { Searchbar, TableRegistros, TableRegistrosMobile } from '../../components'


const dataRegistrosMedicos = [
  {
    nombre: 'Dr. José García',
    especialidad: 'Cardiólogo',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'josegarcia@example.com'
  },
  {
    nombre: 'Dra. Laura Martínez',
    especialidad: 'Pediatra',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'lauramartinez@example.com'
  },
  {
    nombre: 'Dr. Andrés Rodríguez',
    especialidad: 'Dermatólogo',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'andresrodriguez@example.com'
  },
  {
    nombre: 'Dra. Ana López',
    especialidad: 'Ginecóloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'analopez@example.com'
  },
  {
    nombre: 'Dr. Pedro Sánchez',
    especialidad: 'Cirujano',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'pedrosanchez@example.com'
  },
  {
    nombre: 'Dra. Julia Fernández',
    especialidad: 'Oftalmóloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'juliafernandez@example.com'
  },
  {
    nombre: 'Dr. Francisco González',
    especialidad: 'Traumatólogo',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'franciscogonzalez@example.com'
  },
  {
    nombre: 'Dra. María Pérez',
    especialidad: 'Neuróloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'mariaperez@example.com'
  },
  {
    nombre: 'Dr. Carlos Martín',
    especialidad: 'Psiquiatra',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'carlosmartin@example.com'
  },
  {
    nombre: 'Dra. Sofía Ramírez',
    especialidad: 'Endocrinóloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'sofiaramirez@example.com'
  },
  {
    nombre: 'Dr. Juan Pérez',
    especialidad: 'Cirujano',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'juanperez@example.com'
  },
  {
    nombre: 'Dra. María González',
    especialidad: 'Pediatra',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'mariagonzalez@example.com'
  },
  {
    nombre: 'Dr. Carlos Martínez',
    especialidad: 'Dermatólogo',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'carlosmartinez@example.com'
  },
  {
    nombre: 'Dra. Ana Rodríguez',
    especialidad: 'Ginecóloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'anarodriguez@example.com'
  },
  {
    nombre: 'Dr. Luis Hernández',
    especialidad: 'Cardiólogo',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'luishernandez@example.com'
  },
  {
    nombre: 'Dra. Laura García',
    especialidad: 'Oftalmóloga',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'lauragarcia@example.com'
  },
];


function RegistroMedico() {
  return (
    <div className='flex justify-center '>
      <div className='w-full
    mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0'>

        <div className='hidden xl:flex
        xl:ml-[62px] xl:mt-[36px]'>
          <h1>Registro de médicos</h1>
        </div>


        <div className='flex xl:ml-[62px] xl:mt-[13px]'>
          < Searchbar />
        </div>

        <div className='text-primarygrey  md:justify-center md:gap-48
        xl:hidden flex flex-row justify-between mt-[30px]'>
          <h1>Nombre</h1>
          <h1>Acciones</h1>
        </div>

        <div className=''>
          <div className='xl:hidden flex'>
            <TableRegistrosMobile dataRegistros={dataRegistrosMedicos} />
          </div>
          <div className='hidden xl:flex w-[1152px] ml-[62px] mt-[45px]'>
            < TableRegistros dataRegistros={dataRegistrosMedicos} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default RegistroMedico