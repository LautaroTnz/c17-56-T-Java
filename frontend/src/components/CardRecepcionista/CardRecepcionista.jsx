import React from "react";

function CardRecepcionista({ especialidades, data }) {
  // Contador de médicos por especialidad
  const medicoPorEspecialidad = {};

  // Contar médicos por especialidad
  data.forEach((medico) => {
    if (Array.isArray(medico.speciality)) {
      medico.speciality.forEach((especialidadId) => {
        if (medicoPorEspecialidad[especialidadId]) {
          medicoPorEspecialidad[especialidadId]++;
        } else {
          medicoPorEspecialidad[especialidadId] = 1;
        }
      });
    } else {
      const especialidadId = medico.speciality;
      if (medicoPorEspecialidad[especialidadId]) {
        medicoPorEspecialidad[especialidadId]++;
      } else {
        medicoPorEspecialidad[especialidadId] = 1;
      }
    }
  });

  return (
    <div className="w-[328px] h-[301px] xl:w-[298px] xl:h-[301px]  border border-primarygrey shadow-md rounded-md px-5 overflow-y-auto">
      <h1 className="text-[15px] mt-[2px] w-full  mb-4 sticky top-0 bg-white py-4 z-10 text-primarygrey font-medium">
        Especialidades
      </h1>
      <div className="mt-[17px]">
        {especialidades.map((especialidad, index) => {
          const medicoCount =
            medicoPorEspecialidad[especialidad.specialityId] || 0;
          const porcentaje = (medicoCount / data.length) * 100;
          const nombreEspecialidad =
            especialidad.description.length > 10
              ? `${especialidad.description.substring(0, 10)}...`
              : especialidad.description;

          let colorBarra;
          if (porcentaje < 20) {
            colorBarra = "red";
          } else if (porcentaje < 40) {
            colorBarra = "yellow";
          } else {
            colorBarra = "green";
          }

          return (
            <div
              key={index}
              className={`flex justify-between items-center mb-4 text-[14px] text-primarygrey ${
                index !== especialidades.length - 1 ? "pb-4 border-b" : ""
              }`}
              title={especialidad.description}
            >
              <span>{nombreEspecialidad}</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-lg mr-16 xl:mr-10 flex">
                  <div
                    className={`h-full rounded-lg`}
                    style={{
                      width: `${porcentaje}%`,
                      backgroundColor: colorBarra,
                    }}
                  ></div>
                </div>
                <span className="text-[14px] text-primarygrey">
                  {porcentaje.toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardRecepcionista;
