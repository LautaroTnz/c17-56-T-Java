import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTurns } from "../../redux/actions/turnActions";
import { transformTurnData } from "../../utils/transformTurnData/TransformTurnData";
import dayjs from "dayjs";
import { Calendario } from "../../utils";
import { CardRecepcionista, CardPaciente, InicioTable } from "../../components";
import {
  Avatarturnos,
  Avatarestudios,
  Avatarmedico2,
  Iconohola,
  Bannerpaciente,
} from "../../assets";
import { avatar } from "@material-tailwind/react";

const estadisticas1 = {
  titulo: "10 Turnos",
  pacientes: "Pedidos este último semestre",
  descripcion: "9 turnos fueron concluídos",
  avatar: Avatarturnos,
};

const estadisticas2 = {
  titulo: "6 Consultas",
  pacientes: "A través de la plataforma online",
  descripcion: "5 profesionales fueron consultados",
  avatar: Avatarmedico2,
};

const estadisticas3 = {
  titulo: "12 Estudios",
  pacientes: "Realizados este último semestre",
  descripcion: "Los estudios se pueden consultar a través de la plataforma",
  avatar: Avatarestudios,
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
  const dispatch = useDispatch();
  const turns = useSelector((state) => state.turns.turns); // Obten los turnos de Redux

  useEffect(() => {
    dispatch(fetchTurns()); // Ejecuta la acción para obtener turnos
  }, [dispatch]);

  // Transformar los datos para BigCalendar
  const events = transformTurnData(turns);
  console.log('Eventos desde AgendaMedico: ',events);

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


  return (
    <div className="flex justify-center">
      <div className="mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className="xl:mt-[52px] xl:ml-[30px] xl:flex  mt-[55px] flex flex-col text-primarygrey">
          <div className="xl:flex xl:flex-row xl:gap-x-3">
            <h1 className="text-[20px] xl:mb-[5px] text-principal font-medium">
              Hola, Paciente
            </h1>
            <img
              className="w-[24px] h-[24px] xl:mt-1"
              src={Iconohola}
              alt="Hola"
            />
          </div>

          <p className="xl:mb-[16px] text-principal">Nro. de afiliado: 45987</p>
          <div className="xl:flex xl:flex-row flex flex-col gap-y-9 xl:gap-x-9">
            <div
              className="xl:w-[575px] xl:h-[260px] w-[328px] h-[50px] rounded-[5px] bg-cover bg-center relative" // Agregamos clases para el fondo
              style={{ backgroundImage: `url(${Bannerpaciente})` }} // Establecemos la imagen de fondo
            >
              <div className="xl:w-[334px] xl:h-[126px] xl:ml-[22px] xl:mt-[22px]">
                <h1
                  className="xl:text-[28px] text-white "
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }} // Sombra para el texto
                >
                  Agenda tu cita médica a través de tu panel de gestión
                </h1>
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
            <CardPaciente estadisticas={estadisticas1} />
            <CardPaciente estadisticas={estadisticas2} />
            <CardPaciente estadisticas={estadisticas3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendaPaciente;
