import Dropdownsespecialidades from "../../components/Dropdowns/Dropdownsespecialidades";
import { DropdownsTurn } from "../../components";
import { fetchTurns } from "../../redux/actions/turnActions";
import { fetchSpecialties } from "../../redux/actions/actions";
import { fetchDoctors } from "../../redux/actions/doctorActions";
import { createTurnActions } from "../../redux/actions/createturnActions";

import { Dropdowns } from "../../components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../redux/actions/patientActions";
import { Datepiker } from "../../utils";
import { crearRecetaActions } from "../../redux/actions/prescriptionActions";
import Swal from "sweetalert2"; // Importar SweetAlert2
import withReactContent from "sweetalert2-react-content"; // Para usar React con SweetAlert2

const MySwal = withReactContent(Swal); // Crear una instancia con soporte para React

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

  const dispatch = useDispatch();
  const { receta, loading, error } = useSelector((state) => state.receta); // Obtener el estado de la receta

  const { patients } = useSelector((state) => state.patient);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Estados locales para el nuevo turno
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedHora, setSelectedHora] = useState(""); // Podemos agregar un campo de texto para la hora
  const [turnTitle, setTurnTitle] = useState(""); // Campo para el título
  const [turnDescription, setTurnDescription] = useState(""); // Campo para la descripción

  const especialidades = useSelector((state) => state.specialty.especialidades);
  const doctors = useSelector((state) => state.doctor.doctors);
  const turns = useSelector((state) => state.turns.turns);
  const turnCreateLoading = useSelector((state) => state.createTurn.loading);
  const turnCreateError = useSelector((state) => state.createTurn.error);

  const [selectedFecha, setSelectedFecha] = useState(new Date());
  const [indicaciones, setIndicaciones] = useState(""); // Almacena el contenido del campo de indicaciones

  useEffect(() => {
    dispatch(fetchPatients()); // Cargar la lista de pacientes
    dispatch(fetchTurns());
    dispatch(fetchSpecialties());
    dispatch(fetchDoctors());
  }, [dispatch]);

  useEffect(() => {
    const filtered = patients.filter((p) =>
      `${p.firstname} ${p.lastname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchTerm, patients]);

  const filteredDoctors = selectedEspecialidad
    ? doctors.filter((doc) => doc.speciality === selectedEspecialidad)
    : [];

    const handleConfirmTurno = () => {
      MySwal.fire({
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
          const newTurno = {
            patient: 203, // Hardcodeado
            doctor: selectedMedico?.value,
            date: selectedFecha.toISOString().split("T")[0],
            time: selectedHora,
            state: true,
            title: turnTitle,
            description: turnDescription,
          };
  
          dispatch(createTurnActions(newTurno)).then(
            () => {
              MySwal.fire({
                title: "Turno creado con éxito",
                text: "El turno se creó exitosamente.",
                icon: "success",
              });
  
              // Restablecer campos
              setSelectedEspecialidad(null);
              setSelectedMedico(null);
              setSelectedFecha(new Date());
              setSelectedHora("");
              setTurnTitle("");
              setTurnDescription("");
            },
            (error) => {
              console.error("Error al crear el turno:", error);
              MySwal.fire({
                title: "Error al crear el turno",
                text: "Intente nuevamente.",
                icon: "error",
              });
            }
          );
        } else if (result.isDenied) {
          MySwal.fire("El turno no fue guardado.", "", "info");
  
          // Restablecer campos
          setSelectedEspecialidad(null);
          setSelectedMedico(null);
          setSelectedFecha(new Date());
          setSelectedHora("");
          setTurnTitle("");
          setTurnDescription("");
        } else {
          MySwal.fire("Acción cancelada.", "", "info");
        }
      });
    };

    const handleEspecialidadChange = (specialityId) => {
      setSelectedEspecialidad(specialityId);
      setSelectedMedico(null); // Restablece el médico cuando cambia la especialidad
    };
  
    const handleMedicoChange = (option) => {
      setSelectedMedico(option);
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
                  className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black pl-2"
                  type="text"
                  placeholder="Buscar paciente por nombre"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsDropdownVisible(true)}
                  onBlur={() =>
                    setTimeout(() => setIsDropdownVisible(false), 100)
                  }
                />
                {isDropdownVisible && filteredPatients.length > 0 && (
                  <ul className="bg-white border border-black rounded shadow-lg w-[488px] mt-[81px] absolute z-10">
                    {filteredPatients.map((patient) => (
                      <li
                        key={patient.patientId}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedPatient(patient);
                          setSearchTerm(
                            `${patient.firstname} ${patient.lastname}`
                          );
                          setIsDropdownVisible(false);
                          setFilteredPatients([]); // Limpiar la lista de filtrados
                        }}
                      >
                        {patient.firstname} {patient.lastname}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {selectedPatient && (
                <div className="flex flex-col gap-y-[8px] mt-5 xl:mt-0">
                  <p className="text-[16px] text-texto font-medium">
                    Paciente seleccionado:
                  </p>
                  <div className="xl:w-[488.14px] w-[328px] h-[50px] bg-gray-100 rounded-[5px] border border-gray-300 flex items-center justify-center">
                    {selectedPatient.firstname} {selectedPatient.lastname}
                  </div>
                </div>
              )}
            </div>
            <h1 className="text-[18px] text-texto font-medium mt-[43px] mb-[5px]">
              Seleccionar un médico
            </h1>
            <div className="flex flex-col gap-y-[17px] ">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[18px] text-texto font-medium">
                    Seleccionar una especialidad
                  </p>
                  <Dropdownsespecialidades
                    especialidades={especialidades}
                    onChange={handleEspecialidadChange}
                  />
                </div>
                <div className="flex flex-col gap-y-[8px] xl:mt-[-35px]">
                  <p className="text-[18px] text-texto font-medium">
                    Seleccionar una fecha
                  </p>

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
                  <p className="text-[18px] text-texto font-medium">
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
                  <p className="text-[18px] text-texto font-medium">
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
            >              Confirmar turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeleccionTurno;
