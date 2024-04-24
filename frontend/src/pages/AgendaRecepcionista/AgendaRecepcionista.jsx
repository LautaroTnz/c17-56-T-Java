import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTurns } from "../../redux/actions/turnActions";
import { Calendario } from "../../utils";
import { transformTurnData } from "../../utils/transformTurnData/TransformTurnData";

function AgendaRecepcionista() {

  const dispatch = useDispatch();
  const turns = useSelector((state) => state.turns.turns); // Obten los turnos de Redux
  console.log('Turnos desde AgendaRecep: ',turns);

  useEffect(() => {
    dispatch(fetchTurns()); // Ejecuta la acción para obtener turnos
  }, [dispatch]);

  // Transformar los datos para BigCalendar
  const events = transformTurnData(turns);
  console.log('Eventos desde AgendaRecep: ',events);
  const medicView = {
    views: ["month", "week", "day", "agenda"],
    defaultView: "month",
  };

  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex justify-between mb-5 mt-[29px]">
          <h1 className="text-principal text-xl font-medium">
            Agenda de Turnos
          </h1>

          <button className="w-[149px] h-[36px] bg-principal hover:bg-primarygreenhover text-white py-2 px-4 rounded">
            <a href="/seleccionturno">Crear cita</a>
          </button>
        </div>
        <div className="xl:w-[1062px] xl:h-[550px] w-[328px] h-[385px]">
          <Calendario medicView={medicView} events={events} />

          <button className="xl:hidden flex justify-center w-full h-[36px] mt-[20px] bg-principal hover:bg-primarygreenhover text-white py-2 px-4 rounded">
            <a href="/seleccionturno"> Crear cita</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgendaRecepcionista;
