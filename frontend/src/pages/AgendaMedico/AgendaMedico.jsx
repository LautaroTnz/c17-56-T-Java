import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTurns } from "../../redux/actions/turnActions";
import { transformTurnData } from "../../utils/transformTurnData/TransformTurnData";
import dayjs from "dayjs";
import { Calendario } from "../../utils";
import { HistoriaClinica } from "../../components";

const agendaView = {
  views: ["day"],
  defaultView: "day",
  components: {
    toolbar: null,
  },
};

const monthView = {
  views: ["month"],
  defaultView: "month",
};

const dayViewComponents = {
  toolbar: ({ label }) => (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">{label}</span>
    </div>
  ),
};

function AgendaMedico() {

  const dispatch = useDispatch();
  const turns = useSelector((state) => state.turns.turns); // Obten los turnos de Redux

  useEffect(() => {
    dispatch(fetchTurns()); // Ejecuta la acción para obtener turnos
  }, [dispatch]);

  // Transformar los datos para BigCalendar
  const events = transformTurnData(turns);


  const [selectedDate, setSelectedDate] = useState(dayjs().toDate());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const historialMedico = {
    paciente: "Pepe",
    numeroAfiliado: "Nro. de afiliado",
    edad: "55 años",
    sexo: "Masculino",
    antecedentesPersonales: [
      "Dislipidemia",
      "Diabetes mellitus tipo 2",
      "Obesidad",
    ],
    antecedentesFamiliares: ["Padre con hipertencion arterial"],
    examenFisico: {
      presionArterial: "120/80 mmHg",
      frecuenciaCardiaca: "75 lpm",
    },
    motivoConsulta: "Revisión de rutina",
    historiaEnfermedadActual:
      "El paciente refiere que hace 3 años le diagnosticaron hipertensión arterial. En ese momento, su presión arterial era de 160/90 mmHg. Se le inició tratamiento con enalapril 10 mg al día, pero no ha logrado controlar la presión arterial.",
    electrocardiograma: "Normal",
  };



  const handleEventClick = (event) => {
    setSelectedEvent(event); // Establecer el evento seleccionado cuando se hace clic en él
  };

  return (
    <div className="flex justify-center">
      <div className="mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className="flex flex-col xl:flex-row">
          <div className=" mt-5 mb-4 xl:mt-12 xl:mb-0 xl:mr-4">
            <h1 className="text-[14px] xl:text-[20px] text-principal font-medium mb-5">
              Turno del día seleccionado
            </h1>
            <div className="w-[328px] h-[385px] xl:w-[575px] xl:h-[260px]">
              <Calendario
                medicView={monthView}
                events={events}
                setSelectedDate={setSelectedDate}
                onSelectEvent={handleEventClick}
              />
            </div>
          </div>

          <div className="mt-5 mb-4 xl:mt-12 xl:mb-0">
            <h1 className="text-[14px] xl:text-[20px] text-principal font-medium mb-5">
              Pacientes del día
            </h1>
            <div className="w-[328px] h-[274px] xl:w-[575px] xl:h-[260px]">
              <Calendario
                medicView={agendaView}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                events={events}
                components={dayViewComponents}
                onSelectEvent={handleEventClick}
              />
            </div>
          </div>
        </div>

        <div className="mt-11 xl:flex xl:flex-col">
          <h1 className="mb-4 text-[14px] xl:text-[20px] text-principal font-medium">
            Resumen de historia clínica
          </h1>
          {selectedEvent && selectedEvent.start && selectedEvent.end && (
            <HistoriaClinica event={{ historialMedico }} />
          )}{" "}
          {/* Mostrar HistoriaClinica solo si hay un evento seleccionado y proviene del segundo calendario */}
        </div>
      </div>
    </div>
  );
}

export default AgendaMedico;
