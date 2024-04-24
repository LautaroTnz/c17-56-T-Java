import React from "react";
import { Iconoverazul, Iconoeditarazul } from "../../assets";

function TablaHistoriaClinica({ registros }) {
  return (
    <div
      className="overflow-x-auto xl:w-[1164px] xl:h-[306px] h-[196px] mb-[85px]"
      style={{ scrollbarWidth: "none" }} // Para Firefox
    >
      <style>
        {`
          ::-webkit-scrollbar {
            display: none; // Para Chrome, Safari y otros navegadores basados en WebKit
          }
        `}
      </style>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-celestediez sticky top-0">
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
                <button className="mr-4 text-blue-500 hover:text-blue-700">
                  <img src={Iconoverazul} alt="Ojo" />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <img src={Iconoeditarazul} alt="Editar" />
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
