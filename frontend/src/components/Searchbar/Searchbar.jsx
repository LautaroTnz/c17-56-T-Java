import { useState } from 'react'
import { IoSearchOutline, IoFilter, IoChevronDown } from 'react-icons/io5';



function Searchbar() {

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };


  return (
    <div className="flex items-center justify-center xl:justify-between xl:flex xl:flex-row xl:w-full xl:mr-[40px]">

      <div className='xl:w-[350px] xl:h-50px
      w-[328px] border border-black rounded-md relative flex items-center'>

        {/* Icono de búsqueda a la izquierda */}
        <IoSearchOutline className='absolute left-3 text-gray-600' />

        {/* Input de búsqueda */}
        <input className='
        w-full h-[46px] pl-10 pr-10' type="text" placeholder="Buscar..." />

        {/* Icono de filtro a la derecha */}
        <IoFilter onClick={toggleFilters} className='xl:hidden 
        absolute right-3 text-gray-600 cursor-pointer' />

      </div>

      {/* Componente de filtro de busqueda */}
      {showFilters && <div className='mt-40 ml-48 absolute  bg-white border border-black rounded-md p-4'>
        <div className='flex flex-col'>
          <button className='py-2 px-2'>Turno</button>
          <button className='py-2 px-2'>Especialidad</button>
        </div>

      </div>
      }

      {/* Botones de filtro en la versión desktop */}
      <div className='hidden xl:flex xl:justify-end xl:items-end xl:ml-4 xl:gap-3'>
        <div className='xl:flex xl:flex-row bg-primarygrey justify-center gap-2 items-center w-[125px] text-white rounded-md'>
          <button className='py-2 px-2'>Turno</button>
          <IoChevronDown className='text-white' />
        </div>
        <div className='xl:flex xl:flex-row bg-primarygrey justify-center gap-2 items-center w-[170px] text-white rounded-md'>
          <button className='py-2 px-2'>Especialidad</button>
          <IoChevronDown className='text-white' />
        </div>
      </div>
    </div>
  );

}
export default Searchbar