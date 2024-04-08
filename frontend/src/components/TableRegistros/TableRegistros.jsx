import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TableRegistros({ dataRegistros }) {
  const [currentPage, setCurrentPage] = useState(1);
  const medicsPerPage = 4;

  // Calcular el índice del último médico en cada página
  const indexOfLastMedic = currentPage * medicsPerPage;
  // Calcular el índice del primer médico en cada página
  const indexOfFirstMedic = indexOfLastMedic - medicsPerPage;
  // Obtener los médicos de la página actual
  const currentMedics = dataRegistros.slice(indexOfFirstMedic, indexOfLastMedic);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(dataRegistros.length / medicsPerPage);

  // Navegación a la página anterior
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Navegación a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full">
      <div className=' h-383px w-full border border-black rounded-lg'>
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Especialidad</th>
              <th className="py-3 px-6 text-left flex justify-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentMedics.map((medico, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-6 flex items-center">
                  <img src={medico.imagenUrl} alt={`Imagen de ${medico.nombre}`} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <p className="text-base font-semibold">{medico.nombre}</p>
                    <p className="text-sm text-gray-500">{medico.correo}</p>
                  </div>
                </td>
                <td className="py-4 px-6">{medico.especialidad}</td>
                <td className="py-4 px-6 flex justify-end">
                  <button className="mr-2"><FaEdit className="text-blue-500 mr-2" /></button>
                  <button><FaTrash className="text-red-500" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Paginación */}
      </div>
      <div className='flex justify-end'>
        <div className="flex justify-center items-center mt-4 border border-black w-[268px] h-[58px] rounded-lg">
          {/* Botón para ir a la página anterior */}
          <button
            onClick={goToPrevPage}
            className={`rounded-lg mx-1 px-3 py-1 border border-black w-[34px] h-[34px] flex justify-center items-center bg-white`}
          >
            &lt;
          </button>
          {/* Botones de números de página */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`rounded-lg mx-1 px-3 py-1 border border-black w-[34px] h-[34px] flex justify-center items-center ${currentPage === i + 1 ? 'bg-gray-200' : 'bg-white'}`}
            >
              {i + 1}
            </button>
          ))}
          {/* Botón para ir a la página siguiente */}
          <button
            onClick={goToNextPage}
            className={`rounded-lg mx-1 px-3 py-1 border border-black w-[34px] h-[34px] flex justify-center items-center bg-white`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableRegistros;
