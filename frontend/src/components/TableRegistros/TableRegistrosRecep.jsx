import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteReceptionist } from "../../redux/actions/deleteReceptionistActions";
import { useParams } from 'react-router-dom';


function TableRegistrosRecep({ dataRegistros }) {
  const dispatch = useDispatch();
  const { recepcionistaId } = useParams(); // Obtiene el ID de la URL
  console.log("Recepcionista ID:", recepcionistaId);

  const handleDeleteClick = (receptionistId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReceptionist(receptionistId)); // Acción para eliminar recepcionista
        Swal.fire("Eliminado", "La recepcionista ha sido eliminada", "success");
      }
    });
  };

  return (
    <div className="w-full">
      <div className="h-[500px] overflow-y-auto border border-primarygrey rounded-lg no-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-celestediez sticky top-0">
              <th className="text-[14px] text-texto py-3 px-6 text-left pl-[50px]">Nombre</th>
              <th className="text-[14px] text-texto py-3 px-6">Correo</th>
              <th className="text-[14px] text-texto py-3 px-6 flex justify-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataRegistros.map((receptionist, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                <td className="py-4 px-6 flex items-center">
                  <img
                    src={receptionist.imagenUrl || "https://cdn-icons-png.flaticon.com/512/0/14.png"}
                    alt={`Imagen de ${receptionist.firstname}`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-base font-semibold">{`${receptionist.firstname} ${receptionist.lastname}`}</p>
                  </div>
                </td>
                <td className="py-4 px-6">{receptionist.email}</td>
                <td className="py-4 px-6 flex justify-end gap-7">
                  <Link to={`/editarreceptionista/${receptionist.id}`}>
                    <FaEdit className="text-blue-500" />
                  </Link>
                  <button onClick={() => handleDeleteClick(receptionist.id)}>
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

export default TableRegistrosRecep;
