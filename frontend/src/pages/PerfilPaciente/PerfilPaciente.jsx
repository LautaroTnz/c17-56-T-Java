import React from "react";
import { CardForm, FormPaciente } from "../../components";

const dataMedico = {
  especialidad: "Fecha de nacimiento",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QeNbxV5_oeH7Iuxx-KoqlrdUffr_j-zse_2P_3tl8w&s",
};

function PerfilPaciente() {
  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex xl:justify-start xl:mt-[36px] xl:mb-3 ">
          <h1 className="text-[20px] text-principal">Crear nuevo perfil de paciente</h1>
        </div>

        <div
          className="xl:w-[1026px] xl:h-[573px] bg-celestediez
                    xl:flex xl:flex-row xl:rounded-md xl: xl:"
        >
          <div
            className="xl:ml-[25px] xl:mt-[61px]
                    mb-[40px] flex justify-center"
          >
            <CardForm data={dataMedico} />
          </div>

          <div className="w-[328px]">
            <FormPaciente data={dataMedico} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilPaciente;