import { useState } from "react";
import { IconAyuda, IconBookMedical, IconBookReception, IconDoctor, IconInicio, IconReception, } from "../../assets";

function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`hidden xl:block z-10 absolute h-screen bg-white mt-[78px] border-r border-black ${expanded ? 'w-[292px]' : 'w-[90px]'}`}>
            <button
                className="absolute top-10 h-6 w-6 transform -translate-y-1/2 right-[-12px] bg-primarygrey text-white rounded-full"
                onClick={toggleSidebar}
            >
                {expanded ? '<' : '>'}
            </button>
            <div className="mt-20">
                {/* Mostrar iconos en columna cuando la barra lateral no está expandida */}
                {!expanded && (
                    <div className="flex flex-col items-start ml-9 gap-y-5 pt-2.5">
                        <div className="h-10"><img className="h-6 w-6" src={IconInicio} alt="Inicio" /></div>
                        <div className="h-10"><img className="h-6 w-6" src={IconDoctor} alt="Inicio" /></div>
                        <div className="h-10"><img className="h-6 w-6" src={IconReception} alt="Inicio" /></div>
                        <div className="h-10"><img className="h-6 w-6" src={IconBookMedical} alt="Inicio" /></div>
                        <div className="h-10"><img className="h-6 w-6" src={IconBookReception} alt="Inicio" /></div>
                    </div>

                )}
                {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
                {expanded && (
                    <div className="flex flex-col items-start ml-9 ">
                        <div className="mb-4 flex items-center h-11">
                            <img className="h-6 w-6" src={IconInicio} alt="Inicio" />
                            <span className="ml-10 text-sm">Inicio</span>
                        </div>
                        <div className="mb-4 flex items-center h-11">
                            <img className="h-6 w-6" src={IconDoctor} alt="Inicio" />
                            <span className="ml-10 text-sm">Crear perfil médico</span>
                        </div>
                        <div className="mb-4 flex items-center h-11">
                            <img className="h-6 w-6" src={IconReception} alt="Inicio" />
                            <span className="ml-10 text-sm">Crear perfil recepcionista</span>
                        </div>
                        <div className="mb-4 flex items-center h-11">
                            <img className="h-6 w-6" src={IconBookMedical} alt="Inicio" />
                            <span className="ml-10 text-sm">Registro de médicos</span>
                        </div>
                        <div className="mb-4 flex items-center h-11">
                            <img className="h-6 w-6" src={IconBookReception} alt="Inicio" />
                            <span className="ml-10 text-sm">Registro de recepcionistas</span>
                        </div>

                    </div>
                )}
            </div>
            {!expanded && (
                <div className="absolute bottom-10 ml-9 mb-0">
                    <img className="h-6 w-6" src={IconAyuda} alt="Inicio" />
                </div>

            )}
            {/* Mostrar iconos con etiqueta cuando la barra lateral está expandida */}
            {expanded && (
                <div className="flex flex-col items-start ml-9 mb-0">
                    <div className="absolute bottom-1 items-center mb-4 h-11">
                        <img className="absolute h-6 w-6 " src={IconAyuda} alt="Inicio" />
                        <span className="ml-14 text-sm">Registro de recepcionistas</span>
                    </div>

                </div>


            )}
            {/* Ícono separado al final de la barra lateral */}

        </div>
    );
}


export default Sidebar