import axios from "axios";
import { useState, useEffect } from "react";

function TablaPacientes({ pacientes }) {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        const users = response.data.results;
        const avatarUrls = users.map((user) => user.picture.thumbnail); // Para obtener imágenes más grandes, usa "medium"
        setAvatars(avatarUrls);
      } catch (error) {
        console.error("Error al obtener avatares:", error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div
      className="overflow-x-auto xl:w-[1112px] xl:h-[543px] w-full xl:rounded-md xl:border xl:border-primarygrey"
      style={{ scrollbarWidth: "none" }} // Para Firefox
    >
      <style>
        {`
          ::-webkit-scrollbar {
            display: none; // Para Chrome, Safari y otros navegadores basados en WebKit
          }
        `}
      </style>
      <table className="min-w-full divide-y divide-gray-200">
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
                    <img
                      className="h-10 w-10 rounded-full"
                      src={avatars[index % avatars.length]}
                      alt="Avatar"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-texto text-[14px] font-medium">
                      {paciente.username}
                    </div>
                    <div className="text-texto text=[14px]">
                      {paciente.patientId}
                    </div>
                  </div>
                </div>
              </td>
              <td className="xl:px-8 xl:py-4 px-3 py-5 whitespace-nowrap text-right text-sm text-principal">
                <button>Elegir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPacientes;
