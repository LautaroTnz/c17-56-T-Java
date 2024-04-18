import React from "react";
import { FiEye, FiEdit } from "react-icons/fi"; // Importar los íconos de react-icons

function TablaTurnosActivos({ registros }) {
  return (
    <div className="overflow-x-auto xl:w-[1046px] xl:h-[353px] h-[196px] mb-[85px]">
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

export default TablaTurnosActivos;
