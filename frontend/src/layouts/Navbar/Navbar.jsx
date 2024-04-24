import { useState, useEffect } from "react";
import {
  IconBookMedical,
  IconBookReception,
  IconCampana,
  IconDoctor,
  IconInicio,
  IconMenuBlanco,
  IconReception,
  IconoMyDoctorApp,
  LogoBaja,
  LogoMyDoctorApp,
  LogoMyDoctorAppNavbar,
  AvatarPaciente,
  AvatarRecepcionista,
  Avatarmedico,
  Avataradmin,
  IconAyuda,
  RegistroMedico,
  HistoriaClinica,
  Iconoagregarpaciente,
  Iconorecetas,
} from "../../assets";
import LogoutButton from "./LogoutButton";

function Navbar({ onLogout, redirectToLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    <div className="absolute w-full mt-0 ">
      <nav className="bg-principal xl:bg-principal p-4 relative z-10">
        <div className="flex justify-between items-center ">
          {isOpen ? (
            <div className="md:hidden flex justify-between items-center ">
              <img src={IconoMyDoctorApp} alt="Logo" />
              <div className="flex justify-end w-full ">
                <button
                  onClick={toggleMenu}
                  className="text-white flex items-end ml-[260px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="md:hidden flex items-center ">
                <button
                  onClick={toggleMenu}
                  className="text-black focus:outline-none"
                >
                  <img
                    src={IconMenuBlanco}
                    alt="hamburguesa"
                    className="w-[24px] h-[24px]"
                  />
                </button>
                <img className="ml-6" src={IconoMyDoctorApp} alt="Logo" />
              </div>
              <div className="hidden md:flex items-center ">
                <img
                  className="ml-[12px] xl:w-[147px] xl:h-[35px]"
                  src={LogoMyDoctorAppNavbar}
                  alt="Logo"
                />
              </div>
              <div className="flex items-center">
                <img className="h-7 w-7 mr-[16px]" src={IconCampana} alt="" />
                <div className="hidden xl:flex">
                  <LogoutButton
                    onLogout={onLogout}
                    redirectToLogin={redirectToLogin}
                    className="hidden xl:flex"
                  />
                </div>
                <div className="h-8 w-8 bg-gray-400 rounded-full xl:hidden ml-3"></div>

                <div className="hidden bg-primaryazul w-52 h-11 rounded-[5px] text-center text-white justify-center gap-x-5 items-center xl:flex ">
                  {userRole === "medico" && (
                    <img
                      className="h-[36px] w-[36px] rounded-full"
                      src={Avatarmedico}
                      alt="Avatar"
                    />
                  )}
                  {userRole === "recepcionista" && (
                    <img
                      className="h-[36px] w-[36px] rounded-full"
                      src={AvatarRecepcionista}
                      alt="Avatar"
                    />
                  )}
                  {userRole === "admin" && (
                    <img
                      className="h-[36px] w-[36px] rounded-full"
                      src={Avataradmin}
                      alt="Avatar"
                    />
                  )}
                  {userRole === "paciente" && (
                    <img
                      className="h-[36px] w-[36px] rounded-full"
                      src={AvatarPaciente}
                      alt="Avatar"
                    />
                  )}
                  <div className="flex flex-col">
                    {userRole === "medico" && (
                      <p className="text-[14px]">Doctor</p>
                    )}
                    {userRole === "recepcionista" && (
                      <p className="text-[14px]">Recepcionista</p>
                    )}
                    {userRole === "admin" && (
                      <p className="text-[14px]">Administrador</p>
                    )}
                    {userRole === "paciente" && (
                      <p className="text-[14px]">Paciente</p>
                    )}
                    <p className="text-[12px] flex">ver perfil</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {isOpen && (
          <div className="bg-white w-[360px] h-[238px] absolute left-0 mt-4 ">
            <>
              <div className="fixed " onClick={toggleMenu}></div>
              <div className="md:hidden mt-2 relative z-50 flex flex-col ml-4">
                {userRole === "admin" && (
                  <>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconInicio}
                        alt="Inicio"
                      />
                      <a
                        href="/inicio"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Inicio
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconDoctor}
                        alt="Inicio"
                      />
                      <a
                        href="/perfilmedico"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Crear perfil médico
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconBookMedical}
                        alt="Inicio"
                      />
                      <a
                        href="/registromedico"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Registro de médicos
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconReception}
                        alt="Inicio"
                      />
                      <a
                        href="/perfilrecepcionista"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Crear perfil recepcionista
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconBookReception}
                        alt="Inicio"
                      />
                      <a
                        href="/registrorecepcionista"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Registro de recepcionistas
                      </a>
                    </div>
                  </>
                )}

                {userRole === "recepcionista" && (
                  <>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconInicio}
                        alt="Inicio"
                      />
                      <a
                        href="/agendarecepcionista"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Inicio
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconBookReception}
                        alt="Inicio"
                      />
                      <a
                        href="/registropaciente"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Registro de pacientes
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={Iconoagregarpaciente}
                        alt="Inicio"
                      />
                      <a
                        href="/perfilpaciente"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Crear perfil de paciente
                      </a>
                    </div>
                  </>
                )}

                {userRole === "medico" && (
                  <>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconInicio}
                        alt="Inicio"
                      />
                      <a
                        href="/agendamedico"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Inicio
                      </a>
                    </div>

                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconBookReception}
                        alt="Inicio"
                      />
                      <a
                        href="/registropaciente"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Registro de pacientes
                      </a>
                    </div>

                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={Iconorecetas}
                        alt="Inicio"
                      />
                      <a
                        href="/crearreceta"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Crear Receta
                      </a>
                    </div>
                  </>
                )}

                {userRole === "paciente" && (
                  <>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconInicio}
                        alt="Inicio"
                      />
                      <a
                        href="/agendapaciente"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Inicio
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img
                        className="h-7 w-7 mt-1.5"
                        src={IconBookReception}
                        alt="Inicio"
                      />
                      <a
                        href="/elegirturnopaciente"
                        className="block text-black px-3 py-2 text-[16px] text-texto font-medium"
                      >
                        Sacar Turno
                      </a>
                    </div>
                  </>
                )}
              </div>
            </>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
