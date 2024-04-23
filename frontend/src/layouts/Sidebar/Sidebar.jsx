import { useState, useEffect } from "react";
import {
  IconAyuda,
  IconBookMedical,
  IconBookReception,
  IconDoctor,
  IconInicio,
  IconReception,
  RegistroMedico,
  HistoriaClinica,
  Iconoagregarpaciente,
} from "../../assets";
import { ButtonSidebar } from "../../components";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); // Obtiene la ruta actual

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(role);
    }
  }, []);
  console.log("Aca esta el rol desde la sidebar:", userRole);

  return (
    <div
      className={`hidden xl:block z-10 absolute h-screen bg-white mt-[78px] border-r border-primarygrey shadow-xl ${
        expanded ? "w-[292px]" : "w-[90px]"
      }`}
    >
      <div
        onClick={toggleSidebar}
        className="absolute top-2 h-6 w-6 transform -translate-y-1/2 right-[-1px]"
      >
        {expanded ? (
          <ButtonSidebar
            onClick={toggleSidebar} // Pasar la función de evento
            expanded={expanded} // Pasar el estado para cambiar el SVG
          />
        ) : (
          <ButtonSidebar
            onClick={toggleSidebar} // Pasar la función de evento
            expanded={expanded} // Pasar el estado para cambiar el SVG
          />
        )}
      </div>
      {/* Aca empieza la sidebar condicional del admin */}

      {userRole === "admin" && (
        <div className="mt-20">
          {/* Mostrar iconos en columna cuando la barra lateral no está expandida */}
          {!expanded && (
            <div className="flex flex-col items-start ml-7 gap-y-5 pt-2.5">
              <a href="/inicio">
                <div
                  className={`h-[40px] w-[40px] flex justify-center items-center ${
                    isActive("/inicio") ? "bg-fondodiez rounded-full" : ""
                  }`} // Aplica estilo para el fondo y forma cuando está activo
                >
                  <img className="h-7 w-7" src={IconInicio} alt="Inicio" />
                </div>
              </a>
              <a href="/perfilmedico">
                <div
                  className={`h-[40px] w-[40px] flex justify-center items-center ${
                    isActive("/perfilmedico") ? "bg-fondodiez rounded-full" : ""
                  }`} // Aquí también
                >
                  <img className="h-7 w-7" src={IconDoctor} alt="Doctor" />
                </div>
              </a>
              <a href="/registromedico">
                <div
                  className={`h-[40px] w-[40px] flex justify-center items-center ${
                    isActive("/registromedico")
                      ? "bg-fondodiez rounded-full"
                      : ""
                  }`} // Y aquí
                >
                  <img
                    className="h-7 w-7"
                    src={IconBookMedical}
                    alt="Registro Médico"
                  />
                </div>
              </a>
              <a href="/perfilrecepcionista">
                <div
                  className={`h-[40px] w-[40px] flex justify-center items-center ${
                    isActive("/perfilrecepcionista")
                      ? "bg-fondodiez rounded-full"
                      : ""
                  }`} // Y aquí
                >
                  <img
                    className="h-7 w-7"
                    src={IconReception}
                    alt="Recepcionista"
                  />
                </div>
              </a>

              <a href="/registrorecepcionista">
                <div
                  className={`h-[40px] w-[40px] flex justify-center items-center ${
                    isActive("/registrorecepcionista")
                      ? "bg-fondodiez rounded-full"
                      : ""
                  }`} // Aquí también
                >
                  <img
                    className="h-7 w-7"
                    src={IconBookReception}
                    alt="Registro Recepcionista"
                  />
                </div>
              </a>
            </div>
          )}
          {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
          {expanded && (
            <div className="flex flex-col items-start ml-9 ">
              <div className="mb-4 flex items-center h-11">
                <a href="/inicio">
                  <img className="h-7 w-7" src={IconInicio} alt="Inicio" />
                </a>
                <a href="/inicio">
                  <span className="ml-3.5 text-sm">Inicio</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/perfilmedico">
                  <img className="h-7 w-7" src={IconDoctor} alt="Inicio" />
                </a>
                <a href="/perfilmedico">
                  <span className="ml-3.5 text-sm">Crear perfil médico</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/registromedico">
                  <img className="h-7 w-7" src={IconBookMedical} alt="Inicio" />
                </a>
                <a href="/registromedico">
                  <span className="ml-3.5 text-sm">Registro de médicos</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/perfilrecepcionista">
                  <img className="h-7 w-7" src={IconReception} alt="Inicio" />
                </a>
                <a href="/perfilrecepcionista">
                  <span className="ml-3.5 text-sm">
                    Crear perfil recepcionista
                  </span>{" "}
                </a>
              </div>

              <div className="mb-4 flex items-center h-11">
                <a href="/registrorecepcionista">
                  <img
                    className="h-7 w-7"
                    src={IconBookReception}
                    alt="Inicio"
                  />
                </a>
                <a href="/registrorecepcionista">
                  <span className="ml-3.5 text-sm">
                    Registro de recepcionistas
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Aca empieza la sidebar condicional del medico */}

      {userRole === "medico" && (
        <div className="mt-20">
          {/* Mostrar iconos en columna cuando la barra lateral no está expandida */}
          {!expanded && (
            <div className="flex flex-col items-start ml-9 gap-y-5 pt-2.5">
              <a href="/agendamedico">
                <div className="h-10">
                  <img className="h-6 w-6" src={IconInicio} alt="Inicio" />
                </div>
              </a>
              <a href="/registropaciente">
                <div className="h-10">
                  <img className="h-6 w-6" src={RegistroMedico} alt="Inicio" />
                </div>
              </a>
              <a href="/historiaclinica">
                <div className="h-10">
                  <img className="h-6 w-6" src={HistoriaClinica} alt="Inicio" />
                </div>
              </a>
            </div>
          )}
          {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
          {expanded && (
            <div className="flex flex-col items-start ml-9 ">
              <div className="mb-4 flex items-center h-11">
                <a href="/agendamedico">
                  <img className="h-6 w-6" src={IconInicio} alt="Inicio" />
                </a>
                <a href="/registropaciente">
                  <span className="ml-10 text-sm">Inicio</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/registropaciente">
                  <img className="h-6 w-6" src={RegistroMedico} alt="Inicio" />
                </a>
                <a href="/registropaciente">
                  <span className="ml-10 text-sm">Registro de pacientes</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/historiaclinica">
                  <img className="h-6 w-6" src={HistoriaClinica} alt="Inicio" />
                </a>
                <a href="/registropaciente">
                  <span className="ml-10 text-sm">Historia Clínica</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Aca empieza la sidebar condicional del recepcionista */}

      {userRole === "recepcionista" && (
        <div className="mt-20">
          {/* Mostrar iconos en columna cuando la barra lateral no está expandida */}
          {!expanded && (
            <div className="flex flex-col items-start ml-9 gap-y-5 pt-2.5">
              <a href="/agendarecepcionista">
                <div className="h-10">
                  <img className="h-7 w-7" src={IconInicio} alt="Inicio" />
                </div>
              </a>
              <a href="/registropaciente">
                <div className="h-10">
                  <img
                    className="h-7 w-7"
                    src={IconBookReception}
                    alt="Inicio"
                  />
                </div>
              </a>

              <a href="/perfilpaciente">
                <div className="h-10">
                  <img
                    className="h-7 w-7"
                    src={Iconoagregarpaciente}
                    alt="Inicio"
                  />
                </div>
              </a>
            </div>
          )}
          {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
          {expanded && (
            <div className="flex flex-col items-start ml-9 ">
              <div className="mb-4 flex items-center h-11">
                <a href="/agendarecepcionista">
                  <img className="h-7 w-7" src={IconInicio} alt="Inicio" />
                </a>
                <a href="/agendarecepcionista">
                  <span className="ml-6 text-sm">Inicio</span>
                </a>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/registropaciente">
                  <img
                    className="h-7 w-7"
                    src={IconBookReception}
                    alt="Inicio"
                  />
                </a>
                <a href="/registropaciente">
                  <span className="ml-6 text-sm">Registro de pacientes</span>
                </a>
              </div>

              <div className="mb-4 flex items-center h-11">
                <a href="/perfilpaciente">
                  <img
                    className="h-7 w-7"
                    src={Iconoagregarpaciente}
                    alt="Inicio"
                  />
                </a>
                <a href="/perfilpaciente">
                  <span className="ml-6 text-sm">Crear perfil de paciente</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {userRole === "paciente" && (
        <div className="mt-20">
          {/* Mostrar iconos en columna cuando la barra lateral no está expandida */}
          {!expanded && (
            <div className="flex flex-col items-start ml-9 gap-y-5 pt-2.5">
              <a href="/agendapaciente">
                <div className="h-10">
                  <img className="h-6 w-6" src={IconInicio} alt="Inicio" />
                </div>
              </a>
              <a href="/elegirturnopaciente">
                <div className="h-10">
                  <img className="h-6 w-6" src={RegistroMedico} alt="Inicio" />
                </div>
              </a>
            </div>
          )}
          {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
          {expanded && (
            <div className="flex flex-col items-start ml-9 ">
              <div className="mb-4 flex items-center h-11">
                <a href="/agendapaciente">
                  <img className="h-6 w-6" src={IconInicio} alt="Inicio" />
                </a>
                <span className="ml-10 text-sm">Inicio</span>
              </div>
              <div className="mb-4 flex items-center h-11">
                <a href="/elegirturnopaciente">
                  <img className="h-6 w-6" src={RegistroMedico} alt="Inicio" />
                </a>
                <span className="ml-10 text-sm">Elegir Turno</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Este es el icono ayuda para todos */}
      {!expanded && (
        <div className="absolute bottom-10 ml-9 mb-0">
          <img className="h-6 w-6" src={IconAyuda} alt="Inicio" />
        </div>
      )}

      {expanded && (
        <div className="flex flex-col items-start ml-9 mb-0">
          <div className="absolute bottom-1 items-center mb-4 h-11">
            <img className="absolute h-6 w-6 " src={IconAyuda} alt="Inicio" />
            <span className="ml-14 text-sm">Ayuda</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
