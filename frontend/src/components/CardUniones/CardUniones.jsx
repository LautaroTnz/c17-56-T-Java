import React from "react";

function CardUniones({ estadisticas }) {
  const { pacientes, descripcion, subtitulo } = estadisticas;

  return (
    <div
      className="xl:w-[369px] xl:h-[232px] shadow-md
        w-[325px] h-[232px] rounded-md border border-primarygrey"
    >
      <div className="flex flex-col text-primarygrey">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full mt-[22px] ml-[32px]">
            <img
              src={estadisticas.avatar}
              alt="AvatarMedico"
              className="w-[106px] h-[106px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[24px] font-bold ml-[27px] mt-[38px] ">
              {pacientes}
            </p>
            <p className="text-[16px] text-texto ml-[27px] font-medium">
              {subtitulo}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-bold text-texto mt-5 ml-[32px]"></h1>
        </div>
        <div>
          <p className="text-[16px] text-texto mt-[24px] ml-[41px] font-medium">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardUniones;
