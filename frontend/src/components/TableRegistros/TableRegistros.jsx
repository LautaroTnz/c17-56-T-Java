import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importar useDispatch
import { deleteMedic } from "../../redux/actions/deleteMedicActions"; // Importar la acción
import Swal from "sweetalert2"; // Importar SweetAlert2
import { LoadingPage } from "../../layouts";
import { Iconoborrar, Iconoeditarazul } from "../../assets";

function TableRegistros({ dataRegistros, especialidades, loading }) {
  const dispatch = useDispatch(); // Obtener el dispatch de Redux

  const handleEditClick = (medicoId) => `/editarmedico/${medicoId}`;

  // Función para eliminar médico con confirmación
  const handleDeleteClick = (medicId) => {
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
        dispatch(deleteMedic(medicId)); // Acción para eliminar médico
        Swal.fire("Eliminado", "El médico ha sido eliminado", "success"); // Confirmación visual
      }
    });
  };

  const getEspecialidadDescripcion = (specialityId) => {
    const especialidad = especialidades.find(
      (esp) => esp.specialityId === specialityId
    );
    return especialidad ? especialidad.description : "Desconocido";
  };

  // Muestra el componente de carga si está en estado de carga
  if (loading) {
    return <LoadingPage />;
  }

  const [avatars, setAvatars] = useState([]);

  // Obtener avatares aleatorios al montar el componente
  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        const users = response.data.results;
        const avatarUrls = users.map((user) => user.picture.thumbnail); // Puedes usar "medium" para una imagen más grande
        setAvatars(avatarUrls);
      } catch (error) {
        console.error("Error al obtener avatares:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div className="w-full">
      <div className="h-[500px] overflow-y-auto border border-primarygrey rounded-lg no-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-celestediez sticky top-0">
              <th className="text-[14px] text-texto py-3 px-6 text-left pl-[50px]">
                Nombre
              </th>
              <th className="text-[14px] text-texto py-3 px-6">Especialidad</th>
              <th className="text-[14px] text-texto py-3 px-6 flex justify-end">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {dataRegistros.map((medico, index) => (
              <tr key={index} className="border-b border-gray-200 text-center">
                <td className="py-4 px-6 flex items-center">
                  <img
                    src={avatars[index % avatars.length]}
                    alt={`Imagen de ${medico.username}`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-base font-semibold">{medico.username}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  {getEspecialidadDescripcion(medico.speciality)}
                </td>
                <td className="py-4 px-6 flex justify-end gap-7">
                  <Link to={handleEditClick(medico.id)}>
                    <img src={Iconoeditarazul} alt="Editar" />
                  </Link>
                  <button onClick={() => handleDeleteClick(medico.id)}>
                    <img src={Iconoborrar} alt="Borrar" />
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

export default TableRegistros;
