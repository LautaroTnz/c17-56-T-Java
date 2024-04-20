import React from "react";
import { CardForm, FormRecepcionista } from "../../components";

const dataRecepcionista = {
  especialidad: "Sector",
  imagen:
    "https://static.vecteezy.com/system/resources/previews/006/974/405/non_2x/receptionist-line-circle-background-icon-vector.jpg",
};

function PerfilRecepcionista() {
  return (
    <div className="flex justify-center">
      <div
        className="
    mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex xl:justify-start xl:mt-[36px] xl:mb-3 ">
        <h1 className="text-[20px] font-medium text-principal ">
            Crear nuevo perfil recepcionista
          </h1>
        </div>

        <div
          className="xl:w-[1026px] xl:h-[573px] bg-celestediez
            xl:flex xl:flex-row xl:rounded-md xl: xl:"
        >
          <div
            className="xl:ml-[25px] xl:mt-[61px]
            mb-[40px] flex justify-center"
          >
            <CardForm data={dataRecepcionista} />
          </div>

          <div className="w-[328px]">
            <FormRecepcionista data={dataRecepcionista} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilRecepcionista;
