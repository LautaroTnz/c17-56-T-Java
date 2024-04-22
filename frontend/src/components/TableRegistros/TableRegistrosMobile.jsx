import axios from "axios";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importar useDispatch
import { deleteMedic } from "../../redux/actions/deleteMedicActions"; // Importar la acción
import Swal from "sweetalert2"; // Importar SweetAlert2
import { Iconoborrar, Iconoeditarazul } from "../../assets";
 

function TableRegistrosMobile({ dataRegistros, especialidades }) {

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
    <div className="flex flex-col w-full">
      {dataRegistros.map((registro, index) => (
        <div
          key={index}
          className="flex items-center border-t border-gray-400 py-2"
        >
          {/* Imagen */}
          <img
            src={avatars[index % avatars.length]}
            alt={`Imagen de ${registro.username}`}
            className="w-10 h-10 rounded-full mr-2"
          />
          {/* Nombre médico y especialidad */}
          <div className="flex-grow ml-1">
            <p className="text-lg font-semibold">{registro.username}</p>
            <p>{registro.especialidad}</p>
          </div>
          {/* Iconos de editar y eliminar */}
          <div className="flex items-end justify-end gap-x-6">
            <Link to={handleEditClick(registro.id)}>
                    <img src={Iconoeditarazul} alt="Editar" />
                  </Link>
                  <button onClick={() => handleDeleteClick(registro.id)}>
                    <img src={Iconoborrar} alt="Basura" />
                  </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableRegistrosMobile;
