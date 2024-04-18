import { useState, useEffect } from "react";
import { SearchbarSola, TablaPacientes } from "../../components";

function RegistroPaciente() {
  const pacientes = [
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
    { nombre: "Juan Pérez", numeroAfiliado: "123456" },
    { nombre: "María Rodríguez", numeroAfiliado: "789012" },
  ];

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(role);
    }
  }, []);
  console.log("Aca esta el rol desde RegistroPaciente:", userRole);

  return (
    <div className="flex justify-center ">
      <div
        className="w-full
                            mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div>
          <h1
            className="mt-5 mb-5 ml-5
                    xl:text-[20px] xl:mb-[13px] xl:ml-[50px] xl:mt-[36px]"
          >
            Registro de pacientes
          </h1>
          <div
            className="mb-5 ml-5 gap-y-5
                    xl:ml-[50px] xl:mt-[36px] xl:mb-0 xl:flex xl:flex-row xl:justify-between flex flex-col"
          >
            <SearchbarSola />
            {userRole === "recepcionista" && (
              <div className="mr-[95px] xl:w-[149px] h-[36px] w-[328px]">
                <button
                  className=" w-full bg-primarygrey hover:bg-primarygreenhover text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Crear Paciente
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className="
                xl:mt-5 xl:ml-[50px]"
        >
          <TablaPacientes pacientes={pacientes} />
        </div>
      </div>
    </div>
  );
}

export default RegistroPaciente;
