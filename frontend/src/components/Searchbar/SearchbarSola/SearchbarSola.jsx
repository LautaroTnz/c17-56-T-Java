import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchbarSola({ value, onChange }) {
  return (
    <div className="relative w-[328px] h-[46px] xl:w-[463px] xl:h-[50px] border border-primarygrey rounded-md">
      <input
        type="text"
        value={value} // El valor actual del término de búsqueda
        onChange={onChange} // Actualizar el término de búsqueda
        className="w-full h-full pl-4 pr-10 outline-none"
        placeholder="Buscar..."
      />
      {/* Posicionar el icono de búsqueda en la parte derecha, dentro de la barra */}
      <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
    </div>
  );
}

export default SearchbarSola;
