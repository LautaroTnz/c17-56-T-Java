import React from "react";
import { FiEye, FiEdit } from "react-icons/fi"; // Importar los íconos de react-icons

function TablaHistoriaClinica({ registros }) {
  return (
    <div className="overflow-x-auto xl:w-[1164px] xl:h-[306px] h-[196px] mb-[85px]">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 sticky top-0">
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Especialidad</th>
            <th className="px-4 py-2 hidden xl:table-cell">Doctor</th>
            <th className="px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{registro.fecha}</td>
              <td className="px-4 py-2">{registro.especialidad}</td>
              <td className="px-4 py-2 hidden xl:table-cell">
                {registro.doctor}
              </td>
              <td className="px-4 py-2 flex justify-center">
                <button className="mr-2 text-blue-500 hover:text-blue-700">
                  <FiEye />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaHistoriaClinica;
