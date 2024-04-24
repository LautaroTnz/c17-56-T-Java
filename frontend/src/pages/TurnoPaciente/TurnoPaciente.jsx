import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTurns } from "../../redux/actions/turnActions";
import { fetchSpecialties } from "../../redux/actions/actions";
import { fetchDoctors } from "../../redux/actions/doctorActions";
import { createTurnActions } from "../../redux/actions/createturnActions";
import { combineTurnsWithSpecialtiesAndDoctors } from "../../utils/combineTurnsWithSpecialtiesAndDoctors/combineTurnsWithSpecialtiesAndDoctors";
import { DropdownsTurn } from "../../components";
import { Datepiker } from "../../utils";
import { TablaTurnosActivos } from "../../components";
import { LoadingPage } from "../../layouts";
import Dropdownsespecialidades from "../../components/Dropdowns/Dropdownsespecialidades";
import Swal from "sweetalert2";

function TurnoPaciente() {
  const dispatch = useDispatch();

  // Estados locales para el nuevo turno
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(new Date());
  const [selectedHora, setSelectedHora] = useState(""); // Podemos agregar un campo de texto para la hora
  const [turnTitle, setTurnTitle] = useState(""); // Campo para el título
  const [turnDescription, setTurnDescription] = useState(""); // Campo para la descripción

  const especialidades = useSelector((state) => state.specialty.especialidades);
  const doctors = useSelector((state) => state.doctor.doctors);
  const turns = useSelector((state) => state.turns.turns);
  const turnCreateLoading = useSelector((state) => state.createTurn.loading);
  const turnCreateError = useSelector((state) => state.createTurn.error);

  const loading = useSelector((state) => {
    return (
      !state.turns.loading && !state.specialty.loading && !state.doctor.loading
    );
  });

  useEffect(() => {
    dispatch(fetchTurns());
    dispatch(fetchSpecialties());
    dispatch(fetchDoctors());
  }, [dispatch]);

  // Verificar datos cargados
  console.log("Especialidades:", especialidades);
  console.log("Doctores:", doctors);

  if (!loading) {
    return <LoadingPage />;
  }

  // Filtrar médicos según la especialidad seleccionada
  const filteredDoctors = selectedEspecialidad
    ? doctors.filter((doc) => doc.speciality === selectedEspecialidad)
    : [];

  const handleEspecialidadChange = (specialityId) => {
    setSelectedEspecialidad(specialityId);
    setSelectedMedico(null); // Restablecer el médico cuando cambie la especialidad
  };

  const registros = combineTurnsWithSpecialtiesAndDoctors(
    turns,
    especialidades,
    doctors
  );


  const eventId = turns.id;

  const doctorOptions = doctors.map((doctor) => {
    // Encuentra la especialidad del médico
    const specialty = especialidades.find(
      (especialidad) => especialidad.specialityId === doctor.speciality
    );

    const specialtyName = specialty
      ? specialty.description
      : "Especialidad desconocida";

    return {
      label: `${doctor.firstname} ${doctor.lastname}`,
      value: doctor.id,
      specialty: specialtyName, // Usa la descripción de la especialidad
    };
  });


  // Manejar selección de médico
  const handleMedicoChange = (option) => {
    setSelectedMedico(option);
  };

  // Confirmar turno
  const handleConfirmTurno = () => {
    Swal.fire({
      title: "¿Deseas confirmar el turno?",
      text: "Esta acción no puede deshacerse.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "No guardar",
      denyButtonText: "Cancelar",
      showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario elige "Guardar"
        const newTurno = {
          patient: 203,
          doctor: selectedMedico.value,
          date: selectedFecha.toISOString().split("T")[0],
          time: selectedHora,
          state: true,
          title: turnTitle,
          description: turnDescription,
        };

        dispatch(createTurnActions(newTurno)).then(
          () => {
            Swal.fire({
              title: "Turno enviado con éxito",
              text: "El turno ha sido creado.",
              icon: "success",
            });
            // Restablece los campos del formulario
            setSelectedEspecialidad(null);
            setSelectedMedico(null);
            setSelectedFecha(new Date());
            setSelectedHora("");
            setTurnTitle("");
            setTurnDescription("");
          },
          (error) => {
            console.error("Error al crear el turno:", error);
            Swal.fire({
              title: "Error al enviar el turno",
              text: "Intente nuevamente.",
              icon: "error",
            });
          }
        );
      } else if (result.isDenied) {
        // Si el usuario elige "No guardar", no hace nada, solo cierra la alerta
        Swal.fire("El turno no fue guardado.", "", "info");
        // Restablecer el formulario
        setSelectedEspecialidad(null);
        setSelectedMedico(null);
        setSelectedFecha(new Date());
        setSelectedHora("");
        setTurnTitle("");
        setTurnDescription("");
      } else {
        // Si el usuario elige "Cancelar", simplemente cierra la alerta sin hacer nada
        Swal.fire("Acción cancelada.", "", "info");
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div
        className="
        mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="flex flex-col xl:w-[1046px] xl:h-[381px] w-[328px] text-primarygrey">
          <div className="flex flex-col ">
            <h1 className="text-[20px] xl:mt-[43px] mb-[5px] font-medium text-principal">
              Agenda tu cita
            </h1>

            <div className="flex flex-col gap-y-[17px] ">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto">Título del turno</p>
                  <input
                    type="text"
                    className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-primarygrey pl-3"
                    placeholder="Ingrese el título del turno"
                    value={turnTitle}
                    onChange={(e) => setTurnTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto">
                    Descripción del turno
                  </p>
                  <input
                    type="text"
                    className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-primarygrey pl-3"
                    placeholder="Ingrese una descripción del turno"
                    value={turnDescription}
                    onChange={(e) => setTurnDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto">
                    Seleccionar una especialidad
                  </p>
                  <div className="xl:w-[488.14px] w-[328px] h-[50px]">
                    <Dropdownsespecialidades
                      especialidades={especialidades}
                      onChange={handleEspecialidadChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto mt-3 xl:mt-0">
                    Seleccionar una fecha
                  </p>

                  <div className="xl:w-[488.14px] xl:h-[50px]">
                    <div className="xl:w-[488.14px] w-[328px] h-[50px]">
                      <Datepiker
                        value={selectedFecha}
                        onChange={(date) => setSelectedFecha(date)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto">
                    Seleccionar un médico
                  </p>
                  <DropdownsTurn
                    options={filteredDoctors.map((doc) => ({
                      label: `${doc.firstname} ${doc.lastname}`,
                      value: doc.id,
                    }))}
                    selected={selectedMedico} // Aquí se pasa el objeto seleccionado
                    onChange={handleMedicoChange}
                  />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto mt-3 xl:mt-0">
                    Seleccionar un horario
                  </p>
                  <input
                    type="text"
                    className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-primarygrey pl-3"
                    placeholder="Ingrese hora (HH:MM)"
                    value={selectedHora}
                    onChange={(e) => setSelectedHora(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button
              onClick={handleConfirmTurno}
              disabled={turnCreateLoading}
              className="text-[14px] w-[149px] h-[39px] bg-principal hover:bg-primarygreenhover text-white font-medium rounded"
            >
              Confirmar turno
            </button>
          </div>

          {turnCreateError && (
            <p className="text-red-600">Error: {turnCreateError}</p>
          )}

          <div className="xl:flex xl:flex-col xl:item-center xl:justify-center xl:text-center mt-[20px]">
            <h1 className="flex xl:mb-5 text-[20px] mt-[23px] mb-[5px] font-medium text-principal">
              Turnos activos
            </h1>
            <TablaTurnosActivos registros={registros} eventId={eventId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurnoPaciente;