import React from 'react'

function InicioTable({ data, especialidades }) {
    console.log('Esto recibo desde la table: ', data);
    console.log('Esto recibo desde la table: ', especialidades);

    return (
        <div className="overflow-hidden w-[328px] h-[301px] border-l border-r border-b border-t border-primarygrey xl:w-[834.01px] xl:h-[301px] rounded-xl shadow-md">
            <div className="overflow-y-auto h-full" style={{ scrollbarWidth: "none" }}>
                <style>
                    {`
        ::-webkit-scrollbar {
          display: none;
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
                        <tr className=" text-white xl:h-[40px] h-[51px] bg-celestediez sticky top-0 rounded-xl">
                            <th className="px-4 py-2 text-[14px] text-texto xl:text-start xl:pl-11">Nombre</th>
                            <th className="px-4 py-2 text-[14px] text-texto xl:text-start ">Especialidad</th>
                            <th className="px-4 py-2 text-[14px] text-texto xl:text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            // Buscar la descripción de la especialidad correspondiente al ID
                            const especialidad = especialidades.find(especialidad => especialidad.specialityId === row.speciality);
                            return (
                                <tr key={index} className="border-b border-primarygrey xl:h-[72px] h-[51px]">
                                    {/* Círculo de la foto del usuario (solo en escritorio) */}
                                    <td className="text-[12px] px-4 py-2 xl:flex xl:items-center xl:space-x-2 xl:justify-start xl:ml-4 xl:mt-3 ">
                                        <div className="hidden xl:block ">
                                            <div className="circle"></div>
                                        </div>
                                        <div>
                                            {row.username}
                                            
                                            {/* Correo electrónico del usuario */}
                                            <span className="hidden xl:block text-gray-500 text-[12px]">ejemplo@gmail.com</span>
                                        </div>
                                    </td>
                                    {/* Especialidad */}
                                    <td className="text-[14px]  px-4 py-2">{especialidad ? especialidad.description : 'Sin especialidad'}</td>
                                    {/* Estado */}
                                    <td className="text-[12px] flex justify-center items-center px-4 py-2 xl:mt-[15px] xl:mb-[15px]">
                                        <span className={`text-[12px] flex xl:px-4 xl:py-1.5 px-2.5 py-1 rounded-[30px] ${row.estado === 'Activo' ? 'bg-activo' : 'bg-inactivo'} text-white`}>
                                            {row.estado}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>






    )
}

export default InicioTable