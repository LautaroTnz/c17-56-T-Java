import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardForm, Form } from "../../components";
import { fetchSpecialties } from "../../redux/actions/actions";
import { Avatarmedico } from "../../assets";

const dataMedico = {
  especialidad: "Especialidad",
  imagen: Avatarmedico,
};

function PerfilMedico() {
  const dispatch = useDispatch();
  const especialidades = useSelector((state) => state.specialty.especialidades);

  // Despachadores
  useEffect(() => {
    dispatch(fetchSpecialties());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex xl:justify-start xl:mt-[36px] xl:mb-3 ">
          <h1 className="text-[20px] font-medium text-principal ">
            Crear nuevo perfil médico
          </h1>
        </div>

        <div
          className="xl:w-[1026px] xl:h-[573px] xl:bg-celestediez bg-white
                    xl:flex xl:flex-row xl:rounded-md xl: xl:"
        >
          <div
            className="xl:ml-[25px] xl:mt-[61px]
                    mb-[40px] flex justify-center"
          >
            <CardForm data={dataMedico} especialidades={especialidades} />
          </div>

          <div className="w-[328px] ">
            <Form data={dataMedico} especialidades={especialidades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilMedico;
