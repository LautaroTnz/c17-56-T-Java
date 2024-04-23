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

function TurnoPaciente() {
  const dispatch = useDispatch();

  // Estados locales para el nuevo turno
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(new Date());
  const [selectedHora, setSelectedHora] = useState(""); // Podemos agregar un campo de texto para la hora
  const [turnTitle, setTurnTitle] = useState(""); // Campo para el título
  const [turnDescription, setTurnDescription] = useState(""); // Campo para la descripción


  // especialidades
  const especialidades = useSelector((state) => state.specialty.especialidades);
  // médicos
  const doctors = useSelector((state) => state.doctor.doctors);
  // turnos
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

  const registros = combineTurnsWithSpecialtiesAndDoctors(
    turns,
    especialidades,
    doctors
  );

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

  // Verifica las opciones generadas
  console.log("Opciones de doctores:", doctorOptions);

  // Manejar selección de médico
  const handleMedicoChange = (option) => {
    setSelectedMedico(option.value);
    setSelectedEspecialidad(option.specialty); // Cambia la especialidad cuando seleccionas un médico
  };

  // Confirmar turno
  const handleConfirmTurno = () => {
    if (
      !selectedMedico ||
      !selectedFecha ||
      !selectedHora ||
      turnTitle === "" ||
      turnDescription === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newTurno = {
      patient: 0, // Placeholder para el ID del paciente
      doctor: selectedMedico,
      date: selectedFecha.toISOString().split("T")[0],
      time: selectedHora,
      state: true,
      title: turnTitle,
      description: turnDescription,
    };

    console.log("Enviando nuevo turno:", newTurno);

    dispatch(createTurnActions(newTurno)).then(
      () => {
        console.log("Turno creado con éxito.");
      },
      (error) => {
        console.error("Error al crear el turno:", error);
      }
    );
  };
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
            <div className="flex flex-col gap-y-[8px]">
          <p className="text-[16px]">Título del turno</p>
          <input
            type="text"
            className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
            placeholder="Ingrese el título del turno"
            value={turnTitle}
            onChange={(e) => setTurnTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <p className="text-[16px]">Descripción del turno</p>
          <input
            type="text"
            className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
            placeholder="Ingrese una descripción del turno"
            value={turnDescription}
            onChange={(e) => setTurnDescription(e.target.value)}
          />
        </div>
            <div className="flex flex-col gap-y-[17px] ">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar una especialidad</p>
                  <input
                    type="text"
                    className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
                    placeholder="Especialidad"
                    value={selectedEspecialidad}
                    read-only
                  />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar una fecha</p>

                  <div className="xl:w-[488.14px] xl:h-[50px]">
                    <Datepiker
                      value={selectedFecha}
                      onChange={(date) => setSelectedFecha(date)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar un médico</p>
                  <DropdownsTurn
                    options={doctorOptions} // Asegúrate de pasar la lista de médicos
                    selected={doctorOptions.find(
                      (o) => o.value === selectedMedico
                    )}
                    onChange={handleMedicoChange}
                  />
                </div>
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px]">Seleccionar un horario</p>
                  <input
                    type="text"
                    className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
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
              className="text-[10px] w-[136px] h-[36px] bg-primarygrey hover:bg-primarygreenhover text-white font-bold py-2 px-4 rounded"
            >
              Confirmar turno
            </button>
          </div>

          {turnCreateError && (
            <p className="text-red-600">Error: {turnCreateError}</p>
          )}

          <div className="xl:flex xl:flex-col xl:item-center xl:justify-center xl:text-center xl:mt-[17px] mt-[20px]">
            <h1 className="flex xl:mb-5 xl:text-[20px]">Turnos activos</h1>
            <TablaTurnosActivos registros={registros} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurnoPaciente;
