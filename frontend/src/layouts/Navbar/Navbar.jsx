import { useState } from "react";
import {
  IconBookMedical,
  IconBookReception,
  IconCampana,
  IconDoctor,
  IconInicio,
  IconReception,
  LogoBaja,
  LogoMyDoctorAppNavbar,
} from "../../assets";
import LogoutButton from "./LogoutButton";

function Navbar({ onLogout, redirectToLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-full mt-0 ">
      <nav className="bg-primaryazul p-4 relative z-10 xl:border-b xl:border-black">
        <div className="flex justify-between items-center">
          {isOpen ? (
            <div className="md:hidden flex justify-between items-center">
              <img src={LogoBaja} alt="Logo" />
              <div className="flex justify-end w-full">
                <button
                  onClick={toggleMenu}
                  className="text-black flex items-end ml-[260px]"
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
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16v2H4V5zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                    />
                  </svg>
                </button>
                <img className="ml-6" src={LogoBaja} alt="Logo" />
              </div>
              <div className="hidden md:flex items-center">
                <img
                  className="ml-[12px] xl:w-[147px] xl:h-[35px]"
                  src={LogoMyDoctorAppNavbar}
                  alt="Logo"
                />
              </div>
              <div className="flex items-center">
                <img className="h-5 w-5 mr-[30px]" src={IconCampana} alt="" />
                <LogoutButton
                  onLogout={onLogout}
                  redirectToLogin={redirectToLogin}
                  className="hidden xl:flex"
                />
                <div className="h-8 w-8 bg-gray-400 rounded-full xl:hidden ml-3"></div>

                <div className="hidden bg-primaryazul w-52 h-11 rounded-[5px] text-center text-white justify-center gap-x-5 items-center xl:flex xl:ml-[30px]">
                  <div className="h-[36px] w-[36px] bg-gray-100 rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-[14px]">Administrador</p>{" "}
                    <p className="text-[12px]">ver perfil</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {isOpen && (
          <>
            <div className="fixed  " onClick={toggleMenu}></div>
            <div className="md:hidden mt-2 relative z-50 flex flex-col ">
              <div className="flex flex-row">
                <img className="h-6 w-6 mt-1.5" src={IconInicio} alt="Inicio" />
                <a href="/inicio" className="block text-black px-3 py-2">
                  Inicio
                </a>
              </div>
              <div className="flex flex-row">
                <img className="h-6 w-6 mt-1.5" src={IconDoctor} alt="Inicio" />
                <a href="/perfilmedico" className="block text-black px-3 py-2">
                  Crear perfil médico
                </a>
              </div>
              <div className="flex flex-row">
                <img
                  className="h-6 w-6 mt-1.5"
                  src={IconReception}
                  alt="Inicio"
                />
                <a
                  href="/perfilrecepcionista"
                  className="block text-black px-3 py-2"
                >
                  Crear perfil recepcionista
                </a>
              </div>
              <div className="flex flex-row">
                <img
                  className="h-6 w-6 mt-1.5"
                  src={IconBookMedical}
                  alt="Inicio"
                />
                <a
                  href="/registromedico"
                  className="block text-black px-3 py-2"
                >
                  Registro de médicos
                </a>
              </div>
              <div className="flex flex-row">
                <img
                  className="h-6 w-6 mt-1.5"
                  src={IconBookReception}
                  alt="Inicio"
                />
                <a
                  href="/registrorecepcionista"
                  className="block text-black px-3 py-2"
                >
                  Registro de recepcionistas
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
