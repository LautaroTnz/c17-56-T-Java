import React from "react";
import { Calendario } from "../../utils";

const medicView = {
  views: ["month", "week", "day", "agenda"],
  defaultView: "month",
};

function AgendaRecepcionista() {
  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex justify-between mb-5 mt-[29px]">
          <h1 className="text-primarygrey text-xl">Agenda de Turnos</h1>
          <button className="w-[149px] h-[36px] bg-primarygrey hover:bg-primarygreenhover text-white font-bold py-2 px-4 rounded">
            Crear cita
          </button>
        </div>
        <div className="xl:w-[1062px] xl:h-[550px] w-[328px] h-[385px]">
          <Calendario medicView={medicView} />
          <button className="xl:hidden flex justify-center w-full h-[36px] mt-[20px] bg-primarygrey hover:bg-primarygreenhover text-white font-bold py-2 px-4 rounded">
            Crear cita
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgendaRecepcionista;
