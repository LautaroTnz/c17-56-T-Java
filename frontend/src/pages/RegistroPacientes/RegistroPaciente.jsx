import React from "react";
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

  return (
    <div className="flex justify-center ">
      <div
        className="w-full
                            mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div>
          <h1
            className="mt-5 mb-5
                    xl:text-[20px] xl:mb-[13px] xl:ml-[50px] xl:mt-[36px]"
          >
            Registro de pacientes
          </h1>
          <div
            className="mb-5
                    xl:ml-[50px] xl:mt-[36px] xl:mb-0"
          >
            <SearchbarSola />
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
