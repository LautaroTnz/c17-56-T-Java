import React from 'react'

function InicioTable({ data }) {
    return (
        <div className="overflow-hidden w-[328px] h-[301px] border-l border-r border-b border-black xl:w-[834.01px] xl:h-[301px] rounded-xl">
            <div className="overflow-y-auto h-full" style={{ scrollbarWidth: "none" }}>
                <style>
                    {`
        ::-webkit-scrollbar {
          display: none;
        }
        .sticky-th {
          position: sticky;
          top: 0;
          background-color: #757575; 
          z-index: 1; 
        }
        .circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #333; /* Color de fondo del círculo */
        }
      `}
                </style>
                <table className="table-auto border-collapse w-full rounded-xl">
                    <thead>
                        <tr className="bg-primarygrey text-white xl:h-[80px] h-[51px]">
                            <th className="sticky-th px-4 py-2 text-[14px] xl:text-start xl:pl-11">Nombre</th>
                            <th className="sticky-th px-4 py-2 text-[14px] xl:text-start ">Especialidad</th>
                            <th className="sticky-th px-4 py-2 text-[14px] xl:text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-b border-black xl:h-[80px] h-[51px]">
                                {/* Círculo de la foto del usuario (solo en escritorio) */}
                                <td className="text-[14px] px-4 py-2 xl:flex xl:items-center xl:space-x-2 xl:justify-start xl:ml-4 xl:mt-3 ">
                                    <div className="hidden xl:block ">
                                        <div className="circle"></div>
                                    </div>
                                    <div>
                                        {row.nombre}
                                        <br />
                                        {/* Correo electrónico del usuario */}
                                        <span className="hidden xl:block text-gray-500 text-[12px]">{row.mail}</span>
                                    </div>
                                </td>
                                {/* Especialidad */}
                                <td className="text-[14px]  px-4 py-2">{row.especialidad}</td>
                                {/* Estado */}
                                <td className="text-[14px] flex justify-center items-center px-4 py-2 xl:mt-[15px] xl:mb-[15px]">
                                    <span className={`text-[12px] flex xl:px-4 xl:py-1.5 px-2.5 py-1 rounded-[30px] ${row.estado === 'Activo' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                                        {row.estado}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>






    )
}

export default InicioTable