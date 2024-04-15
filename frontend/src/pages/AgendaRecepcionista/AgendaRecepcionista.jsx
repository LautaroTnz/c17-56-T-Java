import React from 'react'
import { Calendario } from '../../utils'

const medicView = {
  views: ['month', 'week', 'day', 'agenda'],
  defaultView: 'month'
};

function AgendaRecepcionista() {
  return (
    <div className='flex justify-center mr-4 ml-4'>
    <div className='mt-40 w-full h-[340px]
    xl:h-[600px] xl:w-[900px]'>
      <Calendario medicView={medicView}/>
    </div>
    </div>
  )
}

export default AgendaRecepcionista