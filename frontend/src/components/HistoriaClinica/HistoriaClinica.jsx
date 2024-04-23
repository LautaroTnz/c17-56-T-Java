import React from "react";

function HistoriaClinica({ event }) {
  console.log("Eventos desde historial médico", event);

  return (
    <>
      {/* Version mobile */}
      <div className="xl:hidden bg-white shadow-md rounded-lg overflow-hidden w-full border border-primarygrey text-primarygrey">
        {/* Cabecera */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Imagen del paciente */}
          <div className="flex items-center">
            <div className="bg-gray-400 h-12 w-12 rounded-full flex items-center justify-center overflow-hidden mr-3">
              {/*<img src="imagen_paciente.jpg" alt="Imagen del paciente" className="w-full h-full object-cover" />*/}
            </div>
            <div>
              <p className="text-base">
                <span className="font-semibold">
                  {event.historialMedico.paciente}
                </span>
                : {event.historialMedico.numeroAfiliado}
              </p>
            </div>
          </div>
        </div>
        {/* Separador */}
        <div className="border-t border-black"></div>
        {/* Contenido */}
        <div className="px-4 py-3">
          <p className="text-sm">
            <span className="font-semibold">Edad</span>:{" "}
            {event.historialMedico.edad}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Sexo</span>:{" "}
            {event.historialMedico.sexo}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Antecedentes Personales</span>:
          </p>
          <ul className="list-disc list-inside mb-2">
            {event.historialMedico.antecedentesPersonales.map(
              (antecedente, index) => (
                <li key={index} className="text-sm">
                  {antecedente}
                </li>
              )
            )}
          </ul>
          <p className="text-sm">
            <span className="font-semibold">Antecedentes Familiares</span>:
          </p>
          <ul className="list-disc list-inside mb-2">
            {event.historialMedico.antecedentesFamiliares.map(
              (antecedente, index) => (
                <li key={index} className="text-sm">
                  {antecedente}
                </li>
              )
            )}
          </ul>
          <p className="text-sm">
            <span className="font-semibold">Examen Físico</span>:
          </p>
          <p className="text-sm">
            <span className="font-semibold">Presión Arterial</span>:{" "}
            {event.historialMedico.examenFisico.presionArterial}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Frecuencia Cardíaca</span>:{" "}
            {event.historialMedico.examenFisico.frecuenciaCardiaca}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Motivo de Consulta</span>:{" "}
            {event.historialMedico.motivoConsulta}
          </p>
          <p className="text-sm">
            <span className="font-semibold">
              Historia de la Enfermedad Actual
            </span>
            : {event.historialMedico.historiaEnfermedadActual}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Electrocardiograma</span>:{" "}
            {event.historialMedico.electrocardiograma}
          </p>
        </div>
      </div>

      {/* Version desktop */}
      <div className="hidden xl:flex xl:flex-row xl:justify-between text-primarygrey ">
        <div className="h-[207px] w-[578px] border border-primarygrey rounded-md shadow-md">
          <div className="flex items-center justify-between px-4 py-3 border-b border-primarygrey ">
            {/* Imagen del paciente */}
            <div className="flex items-center">
              <div className="bg-gray-400 h-12 w-12 rounded-full flex items-center justify-center overflow-hidden mr-3">
                {/*<img src="imagen_paciente.jpg" alt="Imagen del paciente" className="w-full h-full object-cover" />*/}
              </div>
              <div className="flex flex-row">
                <p className="text-base">
                  <span className="font-semibold">
                    {event.historialMedico.paciente}
                  </span>
                  : {event.historialMedico.numeroAfiliado}
                </p>
                <div className="ml-48">
                  <a href="/historiaclinica">
                    <button className="w-[159px] h-[32px] bg-principal text-[12px] text-white rounded-md">
                      Ver historia completa
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:flex xl:flex-row xl:justify-between xl:items-center">
            <div className="h-[99px] w-[241px] ml-4 mt-3">
              <p className="text-sm">
                <span className="font-semibold">Edad</span>:{" "}
                {event.historialMedico.edad}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Sexo</span>:{" "}
                {event.historialMedico.sexo}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Antecedentes Personales</span>:{" "}
                <br /> {event.historialMedico.antecedentesPersonales.join(", ")}
                .
              </p>
            </div>

            <div className="h-[99px] w-[235px] mt-3">
              <p className="text-sm">
                <span className="font-semibold">Antecedentes Familiares</span>:{" "}
                <br /> {event.historialMedico.antecedentesFamiliares.join(", ")}
                .
              </p>
              <p className="text-sm">
                <span className="font-semibold">Examen Físico</span>:
              </p>
              <p className="text-sm">
                <span className="font-semibold">Presión Arterial</span>:{" "}
                {event.historialMedico.examenFisico.presionArterial}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Frecuencia Cardíaca</span>:{" "}
                {event.historialMedico.examenFisico.frecuenciaCardiaca}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[207px] w-[578px] border border-primarygrey rounded-md shadow-md">
          <div className="mt-6 ml-4">
            <p className="text-sm">
              <span className="font-semibold">Motivo de Consulta</span>:{" "}
              {event.historialMedico.motivoConsulta}
            </p>
            <p className="text-sm">
              <span className="font-semibold">
                Historia de la Enfermedad Actual
              </span>
              : {event.historialMedico.historiaEnfermedadActual}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Electrocardiograma</span>:{" "}
              {event.historialMedico.electrocardiograma}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoriaClinica;
