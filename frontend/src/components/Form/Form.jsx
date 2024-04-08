import React from 'react'

function Form( { data } ) {
  return (
    <div className="p-4 ">
      <form className='w-full flex flex-col gap-6 text-primarygrey mb-[54px]'>

        <div className='xl:flex xl:flex-row gap-5'>
          {/* Primer grupo */}
          <div className='xl:flex xl:flex-col'>
            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="nombre" className="block text-primarygrey font-bold mb-2 ">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="apellido" className="block text-primarygrey font-bold mb-2">Apellido:</label>
              <input type="text" id="apellido" name="apellido" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="dni" className="block text-primarygrey font-bold mb-2">DNI:</label>
              <input type="text" id="dni" name="dni" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          {/* Segundo grupo */}
          <div className='xl:flex xl:flex-col'>
            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="especialidad" className="block text-primarygrey font-bold mb-2">{data?.especialidad}:</label>
              <input type="text" id="especialidad" name="especialidad" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="direccion" className="block text-primarygrey font-bold mb-2">Dirección:</label>
              <input type="text" id="direccion" name="direccion" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="xl:gap-3
            mb-4 flex flex-col gap-2.5">
              <label htmlFor="telefono" className="block text-primarygrey font-bold mb-2">Teléfono:</label>
              <input type="text" id="telefono" name="telefono" placeholder="" className="xl:h-11 xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

        </div>
        <h1 className="xl:mt-0 xl:mb-0
        text-lg font-bold mb-6 mt-9">
          Datos de la cuenta
          </h1>
        {/* Tercer grupo */}
        <div className='xl:flex xl:flex-row xl:gap-5'>
          <div className="mb-4 flex flex-col gap-2.5">
            <label htmlFor="email" className="block text-primarygrey font-bold mb-2">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="" className="xl:h-11 xl:w-[350px]
            h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="xl:mb-0
          mb-6 flex flex-col gap-2.5">
            <label htmlFor="password" className="block text-primarygrey font-bold mb-2">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="" className="xl:h-11 xl:w-[350px]
            h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          
        </div>
        {/* Botones */}
        <div className="xl:flex xl:justify-end xl:gap-5 xl:ml-[724px] xl:mt-[-20px]
        flex justify-end gap-5 ">
          <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">Cancelar</button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">Guardar</button>
        </div>

      </form>
    </div>
  );
}

export default Form