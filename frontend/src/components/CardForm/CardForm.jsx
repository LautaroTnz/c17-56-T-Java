import React from 'react'

function CardForm( { data } ) {
  return (
    <div className='flex flex-col items-center text-center
                    h-[300px] w-[227px] rounded-lg border border-black
                    text-primarygrey
    '>
      <div className='mt-6'>
        <img className='rounded-full h-[106px] w-[106px]' src={data?.imagen} alt="" />
      </div>

      <div >

        <h1 className='text-[16px] mt-8'>Nombre Apellido</h1>
        <p className='text-[14px] mt-1 '>{data?.especialidad}</p>
        <hr className='border-t-1 border-black w-[178px] mt-6' />
        <div>
          <p className='text-[13px] mt-3.5'>Ingreso el día</p>
          <p className='text-[13px]'>22 de febrero de 2021</p>
        </div>

      </div>

    </div>
  )
}

export default CardForm