import { useState } from "react";
import { BellIcon } from '@heroicons/react/24/solid';
import { IconCampana, IconInicio, IconPerfilMedico, IconPerfilRecepcionista, IconRegistroMedico, IconRegistroRecepcionista, LogoBaja } from "../../assets";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="absolute w-full mt-0 ">
            <nav className="bg-gray-300 border-b border-black p-4 relative ">
                <div className="flex justify-between items-center">
                    {isOpen ? (
                        <div className="md:hidden flex justify-between items-center">
                            <img src={LogoBaja} alt="Logo" />
                            <button onClick={toggleMenu} className="text-white ml-56">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="md:hidden flex items-center ">
                                <button onClick={toggleMenu} className="text-black focus:outline-none">
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
                                <img className="ml-[12px]" src={LogoBaja} alt="Logo" />

                            </div>
                            <div className="flex items-center">
                                
                                <img className="h-5 w-5 text-primarygrey mr-4" src={IconCampana} alt="" />
                                <div className="h-8 w-8 bg-gray-400 rounded-full xl:hidden"></div>
                                <div className="hidden bg-gray-400 w-52 h-11 rounded-[5px] text-center text-white justify-center gap-x-5 items-center xl:flex"><div className="h-6 w-6 bg-gray-100 rounded-full"></div>
                                    Administrador</div>
                            </div>
                        </>
                    )}
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-gray-500 opacity-50 z-50 " onClick={toggleMenu}></div>
                )}
                {isOpen && (
                    <div className="md:hidden mt-2 relative z-50 flex flex-col ">
                        <div className="flex flex-row">
                            <img className="h-6 w-6 mt-1.5" src={IconInicio} alt="Inicio" />
                            <a href="#" className="block text-white px-3 py-2">Inicio</a>
                        </div>
                        <div className="flex flex-row">
                            <img className="h-6 w-6 mt-1.5" src={IconPerfilMedico} alt="Inicio" />
                            <a href="#" className="block text-white px-3 py-2">Crear perfil médico</a>
                        </div>
                        <div className="flex flex-row">
                            <img className="h-6 w-6 mt-1.5" src={IconPerfilRecepcionista} alt="Inicio" />
                            <a href="#" className="block text-white px-3 py-2">Crear perfil recepcionista</a>
                        </div>
                        <div className="flex flex-row">
                            <img className="h-6 w-6 mt-1.5" src={IconRegistroMedico} alt="Inicio" />
                            <a href="#" className="block text-white px-3 py-2">Registro de médicos</a>
                        </div>
                        <div className="flex flex-row">
                            <img className="h-6 w-6 mt-1.5" src={IconRegistroRecepcionista} alt="Inicio" />
                            <a href="#" className="block text-white px-3 py-2">Registro de recepcionistas</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar