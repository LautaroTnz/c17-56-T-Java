import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../redux/actions/patientActions";
import { Datepiker } from "../../utils";
import { crearRecetaActions } from "../../redux/actions/prescriptionActions";
import Swal from "sweetalert2"; // Importar SweetAlert2
import withReactContent from "sweetalert2-react-content"; // Para usar React con SweetAlert2

const MySwal = withReactContent(Swal); // Crear una instancia con soporte para React

function CrearReceta() {
  const dispatch = useDispatch();
  const { receta, loading, error } = useSelector((state) => state.receta); // Obtener el estado de la receta

  const { patients } = useSelector((state) => state.patient);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [selectedFecha, setSelectedFecha] = useState(new Date());
  const [indicaciones, setIndicaciones] = useState(""); // Almacena el contenido del campo de indicaciones

  useEffect(() => {
    dispatch(fetchPatients()); // Cargar la lista de pacientes
  }, [dispatch]);

  useEffect(() => {
    const filtered = patients.filter((p) =>
      `${p.firstname} ${p.lastname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchTerm, patients]);

  const handleGenerarReceta = () => {
    if (selectedPatient && selectedFecha) {
      MySwal.fire({
        title: "¿Quieres generar la receta?", // Título del diálogo
        text: "Esta acción no se puede deshacer.", // Texto adicional
        icon: "warning", // Icono de advertencia
        showCancelButton: true, // Mostrar el botón de cancelar
        confirmButtonText: "Sí, crear receta", // Texto del botón de confirmación
        cancelButtonText: "No, cancelar", // Texto del botón de cancelar
      }).then((result) => {
        if (result.isConfirmed) {
          const recetaData = {
            date: selectedFecha.toISOString().split("T")[0], // Fecha en formato ISO
            description: indicaciones, // Descripción de la receta
            patient: selectedPatient.patientId, // ID del paciente
            doctor: 54, // ID del doctor
          };

          dispatch(crearRecetaActions(recetaData))
            .then(() => {
              MySwal.fire({
                title: "Receta creada con éxito", // Título del mensaje de éxito
                text: "La receta ha sido generada correctamente.",
                icon: "success", // Icono de éxito
              });
            })
            .catch((error) => {
              MySwal.fire({
                title: "Error al crear la receta",
                text: `Ocurrió un error al crear la receta: ${error.message}`,
                icon: "error", // Icono de error
              });
            });
        } else {
          console.log("Creación de receta cancelada"); // Acción si el usuario cancela
        }
      });
    } else {
      console.error(
        "Debes seleccionar un paciente y una fecha para generar la receta."
      );
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className="flex flex-col xl:w-[1046px] xl:h-[381px] w-[328px] text-primarygrey">
          <h1 className="text-[20px] text-principal font-medium mt-[30px] mb-[10px]">
            Generar receta
          </h1>
          <div className="flex flex-col">
            <div className="xl:flex xl:flex-row flex-col justify-between">
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[16px] text-texto font-medium">
                  Buscar paciente
                </p>
                <input
                  className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
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

            <div className="flex flex-col gap-y-[17px] mt-10">
              <div className="xl:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-[8px]">
                  <p className="text-[16px] text-texto font-medium">
                    Seleccionar una fecha
                  </p>
                  <div className="xl:w-[488.14px] xl:h-[50px]">
                    <Datepiker
                      value={selectedFecha}
                      onChange={(date) => setSelectedFecha(date)}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[20px] text-principal font-medium mt-[30px] mb-[10px]">
              Indicaciones
            </h1>
            <textarea
              className="border border-primarygrey xl:w-[1045px] xl:h-[211px] w-full h-48 pl-2 pt-2 resize-none text-texto"
              value={indicaciones}
              onChange={(e) => setIndicaciones(e.target.value)} // Capturar indicaciones
            />
          </div>

          <div className="flex justify-end mt-2">
            <button
              className="text-[14px] font-medium xl:w-[149px] xl:h-[39px] w-full bg-principal hover:bg-primarygreenhover text-white py-2 px-4 rounded"
              onClick={handleGenerarReceta} // Llamar a la función al hacer clic
            >
              Generar receta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearReceta;
