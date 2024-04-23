import React from "react";
import { Dropdowns } from "../../components";
import { Datepiker } from "../../utils";

function SeleccionTurno() {
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
  const nombreOption = {
    label: "Nombre",
    value: "nombre",
  };

  return (
    <div className="flex justify-center">
      <div
        className="
    mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >

        <div className="flex flex-col xl:w-[1046px] xl:h-[381px] w-[328px] text-primarygrey">
          <h1 className="text-[20px] text-principal font-medium mt-[30px] mb-[10px]">
            Paciente a designar turno:
          </h1>
          <div className="flex flex-col ">
            {/* Version desktop */}
            <div className="hidden xl:flex  xl:flex-row flex-col justify-between">
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[16px]">Buscar paciente</p>
                <input
                  className=" xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[18px] text-texto font-medium">Paciente a designar turno</p>
                <input
                  className=" xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
                  type="text"
                />
              </div>
            </div>

            {/* Version mobile */}
            <div className="xl:hidden flex flex-col gap-y-[8px] mb-[-15px]">
              <p className="text-[18px] text-texto font-medium">Buscar paciente</p>
              <Dropdowns options={nombreOption} />
            </div>
            <h1 className="text-[20px] text-principal font-medium mt-[43px] mb-[5px]">
              Seleccionar un médico
            </h1>
            <div className="flex flex-col gap-y-[17px] ">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[18px] text-texto font-medium">Seleccionar una especialidad</p>
                  <Dropdowns options={especialidadOption} />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[18px] text-texto font-medium">Seleccionar una fecha</p>

                  <div className="xl:w-[488.14px] xl:h-[50px]">
                    <Datepiker />
                  </div>
                </div>
              </div>

              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[18px] text-texto font-medium">Seleccionar un médico</p>
                  <Dropdowns options={medicoOption} />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[18px] text-texto font-medium">Seleccionar un horario</p>
                  <Dropdowns options={horarioOption} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button className="text-[14px] font-medium w-[149px] h-[39px] bg-principal hover:bg-primarygreenhover text-white py-2 px-4 rounded">
              Confirmar turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeleccionTurno;
