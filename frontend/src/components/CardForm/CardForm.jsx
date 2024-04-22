import React from 'react';

// Función para formatear la fecha al formato "22 de febrero de 2021"
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Configuración del formato
  return date.toLocaleDateString('es-ES', options); // Formato en español
};

function CardForm({ data }) {
  const today = new Date(); // Fecha actual
  const formattedDate = formatDate(today); // Fecha formateada

  return (
    <div className='flex flex-col items-center text-center bg-white
                    h-[300px] w-[227px] rounded-lg border border-primarygrey
                    text-primarygrey
    '>
      <div className='mt-6'>
        <img className='rounded-full h-[116px] w-[106px]' src={data?.imagen} alt="" />
      </div>

      <div>

        <h1 className='text-[16px] mt-6'>{data?.nombre || 'Nombre Apellido'}</h1>
        <p className='text-[14px] mt-1 '>{data?.especialidad || 'Especialidad'}</p>
        <hr className='border-t-1 border-black w-[178px] mt-6' />
        <div>
          <p className='text-[13px] mt-3.5'>Ingreso el día</p>
          <p className='text-[13px]'>{formattedDate}</p> {/* Mostrar la fecha actual */}
        </div>

      </div>

    </div>
  );
}

export default CardForm;
