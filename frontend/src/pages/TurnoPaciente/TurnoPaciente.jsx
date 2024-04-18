import React from "react";
import { Dropdowns } from "../../components";
import { Datepiker } from "../../utils";
import { HistoriaClinica, TablaHistoriaClinica, TablaTurnosActivos } from "../../components";

function TurnoPaciente() {
  const especialidadOption = {
    label: "Especialidad",
    value: "especialidad",
  };
  const medicoOption = {
    label: "Médico",
    value: "medico",
  };
  const horarioOption = {
    label: "Horario",
    value: "horario",
  };

  const registrosHistoriaClinica = [
    { fecha: "11/04/2024", especialidad: "Cirujano", doctor: "Juan Pérez" },
    { fecha: "12/04/2024", especialidad: "Cardiólogo", doctor: "María García" },
    {
      fecha: "13/04/2024",
      especialidad: "Dermatólogo",
      doctor: "Luis Martínez",
    },
    { fecha: "14/04/2024", especialidad: "Pediatra", doctor: "Ana Rodríguez" },
    {
      fecha: "15/04/2024",
      especialidad: "Oftalmólogo",
      doctor: "Carlos Sánchez",
    },
    { fecha: "16/04/2024", especialidad: "Neurólogo", doctor: "Laura Gómez" },
    { fecha: "17/04/2024", especialidad: "Ginecólogo", doctor: "Miguel López" },
    {
      fecha: "18/04/2024",
      especialidad: "Urología",
      doctor: "Elena Fernández",
    },
    {
      fecha: "19/04/2024",
      especialidad: "Endocrinólogo",
      doctor: "Diego Ruiz",
    },
    {
      fecha: "20/04/2024",
      especialidad: "Nutricionista",
      doctor: "Marina González",
    },
    { fecha: "21/04/2024", especialidad: "Psicólogo", doctor: "Sofía Pérez" },
    {
      fecha: "22/04/2024",
      especialidad: "Fisioterapeuta",
      doctor: "Antonio Martín",
    },
    { fecha: "23/04/2024", especialidad: "Oncólogo", doctor: "Patricia Díaz" },
    { fecha: "24/04/2024", especialidad: "Psiquiatra", doctor: "Javier Soto" },
    { fecha: "25/04/2024", especialidad: "Dentista", doctor: "Rosa Navarro" },
  ];

  return (
    <div className="flex justify-center">
      <div
        className="
        mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="flex flex-col xl:w-[1046px] xl:h-[381px] w-[328px] text-primarygrey">
          <div className="flex flex-col ">
            <h1 className="text-[20px] mt-[43px] mb-[5px]">
              Seleccionar un médico
            </h1>
            <div className="flex flex-col gap-y-[17px] ">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar una especialidad</p>
                  <Dropdowns options={especialidadOption} />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar una fecha</p>

                  <div className="xl:w-[488.14px] xl:h-[50px]">
                    <Datepiker />
                  </div>
                </div>
              </div>

              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar un médico</p>
                  <Dropdowns options={medicoOption} />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar un horario</p>
                  <Dropdowns options={horarioOption} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button className="text-[10px] w-[136px] h-[36px] bg-primarygrey hover:bg-primarygreenhover text-white font-bold py-2 px-4 rounded">
              Confirmar turno
            </button>
          </div>

          <div className="xl:flex xl:flex-col xl:item-center xl:justify-center xl:text-center xl:mt-[17px] mt-[20px]">
            <h1 className="flex xl:mb-5 xl:text-[20px]">Turnos activos</h1>
            <TablaTurnosActivos registros={registrosHistoriaClinica} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurnoPaciente;
