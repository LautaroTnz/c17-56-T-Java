import React from 'react'
import { Searchbar, TableRegistros, TableRegistrosMobile } from '../../components'

const dataRegistrosRecepcionistas = [
  {
    nombre: 'María Rodríguez',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'mariarodriguez@example.com'
  },
  {
    nombre: 'José Martínez',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'josemartinez@example.com'
  },
  {
    nombre: 'Laura López',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'lauralopez@example.com'
  },
  {
    nombre: 'Andrés Sánchez',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'andressanchez@example.com'
  },
  {
    nombre: 'Sofía García',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'sofiagarcia@example.com'
  },
  {
    nombre: 'Diego Pérez',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'diegoperez@example.com'
  },
  {
    nombre: 'Ana Martín',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'anamartin@example.com'
  },
  {
    nombre: 'Luisa González',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'luisagonzalez@example.com'
  },
  {
    nombre: 'Carlos Fernández',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'carlosfernandez@example.com'
  },
  {
    nombre: 'Martina Díaz',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'martinadiaz@example.com'
  },
  {
    nombre: 'Almendra gratinada',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'martinadiaz@example.com'
  },
  {
    nombre: 'Martina Romina',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'martinadiaz@example.com'
  },
  {
    nombre: 'Andresita Juarez',
    especialidad: 'Recepción',
    imagenUrl: 'https://cdn-icons-png.flaticon.com/512/0/14.png',
    correo: 'martinadiaz@example.com'
  }
];

function RegistroRecepcionista() {
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
            <TableRegistrosMobile dataRegistros={dataRegistrosRecepcionistas} />
          </div>
          <div className='hidden xl:flex w-[1152px] ml-[62px] mt-[45px]'>
            < TableRegistros dataRegistros={dataRegistrosRecepcionistas} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default RegistroRecepcionista