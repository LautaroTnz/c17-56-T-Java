import React, { useState } from "react";
import dayjs from "dayjs";
import { Calendario } from "../../utils";
import { CardRecepcionista, CardUniones, InicioTable } from "../../components";

const estadisticas1 = {
  titulo: "Citas completadas",
  pacientes: "+500",
  descripcion: "1 cita completada esta semana",
};

const estadisticas2 = {
  titulo: "Citas canceladas",
  pacientes: "50+",
  descripcion: "2 citas canceladas esta semana",
};

const estadisticas3 = {
  titulo: "Exámenes médicos",
  pacientes: "105+",
  descripcion: "2 exámenes médicos añadidos esta semana",
};

const agendaView = {
    views: ["day"],
    defaultView: "day",
    components: {
      toolbar: null,
    },
  };

  const dayViewComponents = {
    toolbar: ({ label }) => (
      <div className="rbc-toolbar">
        <span className="rbc-toolbar-label">{label}</span>
      </div>
    ),
  };

function AgendaPaciente() {

    const [selectedDate, setSelectedDate] = useState(dayjs().toDate());
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event); // Establecer el evento seleccionado cuando se hace clic en él
      };

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
  
    const events = [
      {
        id: 1,
        title: "Revisión rutinaria",
        description: "Reunión semanal para revisar avances y asignar tareas",
        start: dayjs("2024-04-09T09:00:00").toDate(),
        end: dayjs("2024-04-09T10:00:00").toDate(),
        location: "Oficina principal",
        attendees: ["Juan", "María", "Pedro"],
        recep: "Juana de Arco",
        historialMedico: historialMedico, // <-- Aquí
      },
      {
        id: 2,
        title: "Revisión rutinaria",
        description: "Reunión semanal para revisar avances y asignar tareas",
        start: dayjs("2024-04-10T09:00:00").toDate(),
        end: dayjs("2024-04-10T10:00:00").toDate(),
        location: "Oficina principal",
        attendees: ["Juan", "María", "Pedro"],
        recep: "Juana de Arco",
        historialMedico: historialMedico, // <-- Aquí
      },
    ];


  return (
    <div className="flex justify-center">
      <div className="mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className="xl:mt-[52px] xl:ml-[30px] xl:flex  mt-[55px] flex flex-col text-primarygrey">
          <h1 className="text-[20px] xl:mb-[5px]">Hola, Paciente</h1>
          <p className="xl:mb-[15px]">DNI: 12345678</p>
          <div className="xl:flex xl:flex-row flex flex-col gap-y-9 xl:gap-x-9">
            <div className="xl:w-[575px] xl:h-[260px] w-[328px] h-[50px] rounded-[5px] xl:border xl:border-black">
              <div className="xl:w-[334px] xl:h-[126px] xl:ml-[22px] xl:mt-[22px]">
                <h1 className="xl:text-[28px]">
                  Agenda tu cita médica a través de tu panel de gestión
                </h1>
              </div>
              <div className="xl:ml-[22px] xl:mt-[24px]">
                <button className="xl:w-[140px] xl:h-[56px] border border-black rounded-[5px] xl:mr-[8px]">
                  Agenda
                </button>
                <button className="xl:w-[140px] xl:h-[56px] border border-black rounded-[5px]">
                  Ver estudios
                </button>
              </div>
            </div>
            <div className="xl:w-[575px] xl:h-[260px] w-[328px] h-[300px] rounded-[5px] border border-black">
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

          <div className="xl:mt-9 xl:flex xl:flex-row xl:gap-8 flex flex-col gap-9 mt-9 mb-9">
            <CardUniones estadisticas={estadisticas1} />
            <CardUniones estadisticas={estadisticas2} />
            <CardUniones estadisticas={estadisticas3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaPaciente;
