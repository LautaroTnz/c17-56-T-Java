import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../redux/actions/patientActions";
import { SearchbarSola, TablaPacientes } from "../../components";
import { Link } from "react-router-dom";

function RegistroPaciente() {
  const dispatch = useDispatch();

  // Obtener el estado de los pacientes desde Redux
  const { patients } = useSelector((state) => state.patient);
  console.log("Pacientes desde RegistroPaciente.jsx: ", patients);
  const [userRole, setUserRole] = useState(null);
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(role);
    }

    // Llamar a la acción para obtener pacientes al cargar el componente
    dispatch(fetchPatients());
  }, [dispatch]);

  // Filtrar pacientes por nombre según el término de búsqueda
  const filteredPatients = patients.filter((p) =>
    p.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center lg:items-center">
      <div
        className="w-full max-w-screen-xl
                            mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div>
          <h1
            className="mt-5 mb-5 text-principal font-medium
                    xl:text-[20px] xl:mb-[13px] xl:ml-[50px] xl:mt-[36px]"
          >
            Registro de pacientes
          </h1>
          <div
            className="mb-5 gap-y-5
                    xl:ml-[50px] xl:mt-[36px] xl:mb-0 xl:flex xl:flex-row xl:justify-between flex flex-col"
          >
            <SearchbarSola
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {userRole === "recepcionista" && (
              <div className="xl:flex w-full xl:justify-end xl:mr-[95px]">
                <Link to="/perfilpaciente">
                  <button
                    className="xl:w-[157px] h-[39px] w-full bg-principal text-center text-white py-2 px-3 rounded text-[14px] xl:mr-0 font-medium 2xl:mr-[25px]"
                    type="submit"
                  >
                    Agregar paciente
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div
          className="
                xl:mt-3 xl:ml-[50px]"
        >
          <TablaPacientes pacientes={filteredPatients} />
        </div>
      </div>
    </div>
  );
}

export default RegistroPaciente;
