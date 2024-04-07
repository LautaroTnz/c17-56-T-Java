import React from 'react'

function CardUniones( { estadisticas } ) {

    const { titulo, pacientes, descripcion } = estadisticas;

    return (
      <div className='xl:w-[369px] xl:h-[232px]
        w-[325px] h-[232px] rounded-md border border-black'>
        <div className='py-11 px-11 flex flex-col text-primarygrey'>
          <div className='flex items-center gap-x-3'>
            <div className="w-[45px] h-[45px] rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="" />
            </div>
            <p className='text-[16px]'>{titulo}</p>
          </div>
          <div><h1 className='text-[24px] mt-5'>{pacientes}</h1></div>
          <div><p className='text-[16px] mt-7'>{descripcion}</p></div>
        </div>
      </div>
    );
  }

export default CardUniones