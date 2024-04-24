import React from "react";
import { FiEye, FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTurn } from "../../redux/actions/deletedTurnActions";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Iconoborrar } from "../../assets";

function TablaTurnosActivos({ registros, eventId }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector((state) => state.deletedTurn.deleting);

  const handleDelete = (turnId) => {
    Swal.fire({
      title: "¿Está seguro de que desea eliminar este turno?",
      text: "Esta acción no puede deshacerse.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      cancelButtonText: "No borrar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTurn(turnId)).then(
          () => {
            Swal.fire({
              title: "Eliminado",
              text: "El turno ha sido eliminado.",
              icon: "success",
            });
          },
          (error) => {
            Swal.fire({
              title: "Error al eliminar",
              text: "No se pudo eliminar el turno.",
              icon: "error",
            });
          }
        );
      } else {
        Swal.fire("Operación cancelada", "El turno no fue eliminado.", "info");
      }
    });
  };

  return (
    <div
      className="overflow-x-auto xl:w-[1046px] xl:h-[253px] h-[196px] border border-primarygrey rounded-lg"
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
            <th className="text-texto px-4 py-4">Fecha</th>
            <th className="text-texto px-4 py-4">Especialidad</th>
            <th className="text-texto px-4 py-4 hidden xl:table-cell">Doctor</th>
            <th className="text-texto px-4 py-4">Acción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primarygrey">
          {registros.map((registro, index) => (
            <tr key={index} className="h-[72px]">
              <td className="px-4 py-2">{registro.fecha}</td>
              <td
                className="px-4 py-2"
                title={registro.especialidad} // Mostrar el texto completo al pasar el ratón
              >
                {registro.especialidad.length > 13
                  ? `${registro.especialidad.substring(0, 13)}...`
                  : registro.especialidad}
              </td>
              <td className="px-4 py-2 hidden xl:table-cell">
                {registro.doctor}
              </td>
              <td className="px-4 py-2 flex justify-center items-center">
                <button
                  className="text-red-500 hover:text-red-700 mt-4"
                  onClick={() => handleDelete(registro.id)}
                  disabled={isDeleting}
                >
                  <img src={Iconoborrar} alt="Basura" />
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
