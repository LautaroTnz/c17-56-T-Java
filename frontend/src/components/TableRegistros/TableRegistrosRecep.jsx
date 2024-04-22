import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteReceptionist } from "../../redux/actions/deleteReceptionistActions";
import { useParams } from 'react-router-dom';
import { Iconoborrar, Iconoeditarazul } from "../../assets";


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

  const [avatars, setAvatars] = useState([]);


   // Obtener avatares aleatorios al montar el componente
   useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        const users = response.data.results;
        const avatarUrls = users.map(user => user.picture.thumbnail); // Puedes usar "medium" para una imagen más grande
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
                    src={avatars[index % avatars.length]}
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
                  <img src={Iconoeditarazul} alt="Editar" />

                  </Link>
                  <button onClick={() => handleDeleteClick(receptionist.id)}>
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

export default TableRegistrosRecep;
