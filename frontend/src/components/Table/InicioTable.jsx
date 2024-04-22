import React from 'react';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

function InicioTable({ data, especialidades }) {
  const maxNameLength = 8; // Máximo de caracteres para el recorte

  return (
    <div className="overflow-hidden w-[328px] h-[301px] border border-primarygrey xl:w-[834.01px] xl:h-[301px] rounded-xl shadow-md">
      <div className="overflow-y-auto h-full" style={{ scrollbarWidth: 'none' }}>
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
            .circle {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              background-color: #333; /* Color del círculo */
            }
          `}
        </style>
        <table className="table-auto border-collapse w-full rounded-xl">
          <thead>
            <tr className="text-white xl:h-[40px] h-[51px] bg-celestediez sticky top-0 rounded-xl">
              <th className="px-4 py-2 text-[14px] text-texto xl:text-start xl:pl-11">Nombre</th>
              <th className="px-4 py-2 text-[14px] text-texto xl:text-start">Especialidad</th>
              <th className="px-4 py-2 text-[14px] text-texto xl:text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const especialidad = especialidades.find(
                (esp) => esp.specialityId === row.speciality
              );

              return (
                <tr
                  key={index}
                  className="border-b border-primarygrey xl:h-[72px] h-[51px]"
                >
                  <td className="px-4 py-2 text-[12px] xl:flex xl:items-center xl:space-x-2 xl:justify-start xl:ml-4 xl:mt-3">
                    <div className="hidden xl:block">
                      <div className="circle"></div>
                    </div>
                    <div className="truncate"> {/* Aplicar truncado y puntos suspensivos */}
                      {truncateText(row.username, maxNameLength)}
                      <span className="hidden xl:block text-gray-500 text-[12px]">
                        {truncateText(row.email, maxNameLength)}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-[14px] truncate"> {/* Aplicar truncado */}
                    {especialidad ? truncateText(especialidad.description, maxNameLength) : 'Sin especialidad'}
                  </td>
                  <td className="text-[12px] flex justify-center items-center px-4 py-2 xl:mt-[15px] xl:mb-[15px]">
                    <span
                      className={`text-[12px] font-medium flex xl:px-4 xl:py-1.5 px-2.5 py-1 rounded-[30px] ${
                        row.active ? 'bg-activo text-activoletra' : 'bg-inactivo text-alertas'
                      }`}
                    >
                      {row.active ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InicioTable;
