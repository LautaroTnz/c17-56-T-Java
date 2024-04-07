import React from 'react'

function CardRecepcionista({ especialidades }) {
  return (
    <div className='w-[328px] h-[301px]
    xl:w-[298px] xl:h-[301px]  border border-black rounded-md px-5 overflow-y-auto'>
      <h1 className='text-[15px] mt-[2px] w-full  mb-4 sticky top-0 bg-white py-4 z-10'>Especialidades</h1>
      <div className='mt-[17px]'>
        {especialidades.map((especialidad, index) => (
          <div key={index} className={`flex justify-between items-center mb-4 ${index !== especialidades.length - 1 ? 'pb-4 border-b' : ''}`}>
            <span>{especialidad.nombre}</span>
            <div className='flex items-center'>
              <div className='w-16 h-2 bg-gray-200 rounded-lg mr-16 xl:mr-10 flex'>
                <div className='h-full bg-blue-500 rounded-lg' style={{ width: `${especialidad.porcentaje}%` }}></div>
              </div>
              <span>{especialidad.porcentaje}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRecepcionista