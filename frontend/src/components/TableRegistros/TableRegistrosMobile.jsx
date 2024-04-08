import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';


function TableRegistrosMobile({ dataRegistros }) {
    return (
        <div className="flex flex-col w-full">
            {dataRegistros.map((registro, index) => (
                <div key={index} className="flex items-center border-t border-gray-400 py-2">
                    {/* Imagen */}
                    <img src={registro.imagenUrl} alt={`Imagen de ${registro.nombre}`} className="w-10 h-10 rounded-full mr-2" />
                    {/* Nombre médico y especialidad */}
                    <div className="flex-grow ml-1">
                        <p className="text-lg font-semibold">{registro.nombre}</p>
                        <p>{registro.especialidad}</p>
                    </div>
                    {/* Iconos de editar y eliminar */}
                    <div className="flex items-end justify-end">
                        <FaEdit className="text-blue-500 mr-2" />
                        <FaTrash className="text-red-500" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TableRegistrosMobile