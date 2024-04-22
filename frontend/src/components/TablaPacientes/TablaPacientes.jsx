import React from 'react'

function TablaPacientes({ pacientes }) {


    return (
        <div className="overflow-x-auto xl:w-[1112px] xl:h-[543px] w-full xl:rounded-md xl:border xl:border-black">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="sticky top-0 xl:bg-celestediez xl:text-texto">
                    <tr>
                        <th className="py-3 px-2 xl:px-20 xl:py-3 text-left text-[14px] font-medium  uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="py-3 px-2 xl:px-6 xl:py-3 text-right text-[14px] font-medium  uppercase tracking-wider">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pacientes.map((paciente, index) => (
                        <tr key={index}>
                            <td className="xl:px-6 xl:py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-texto text=[14px] font-medium">{paciente.username}</div>
                                        <div className="text-texto text=[14px]">{paciente.patientId}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="xl:px-8 xl:py-4 px-3 py-5 whitespace-nowrap text-right text-sm text-gray-500">
                                Elegir
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaPacientes