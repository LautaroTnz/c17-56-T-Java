import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TableRegistros({ dataRegistros, especialidades }) {
  // Función para obtener la descripción de la especialidad por ID
  const getEspecialidadDescripcion = (specialityId) => {
    console.log("Buscando especialidad para ID:", specialityId);
    const especialidad = especialidades.find(
      (esp) => esp.specialityId === specialityId
    );
    if (!especialidad) {
      console.error("Especialidad no encontrada para ID:", specialityId);
    }
    return especialidad ? especialidad.description : 'Desconocido';
  };

  return (
    <div className="w-full">
      <div className="h-[500px] overflow-y-auto border border-primarygrey rounded-lg no-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-celestediez sticky top-0">
              <th className="text-[14px] text-texto py-3 px-6 text-left pl-[50px]">Nombre</th>
              <th className="text-[14px] text-texto py-3 px-6">Especialidad</th>
              <th className="text-[14px] text-texto py-3 px-6 flex justify-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataRegistros.map((medico, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                <td className="py-4 px-6 flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/0/14.png"
                    alt={`Imagen de ${medico.username}`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-base font-semibold">{medico.username}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  {getEspecialidadDescripcion(medico.speciality)}
                </td>
                <td className="py-4 px-6 flex justify-end">
                  <button className="mr-2">
                    <FaEdit className="text-blue-500" />
                  </button>
                  <button>
                    <FaTrash className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableRegistros;
