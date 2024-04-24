import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardForm, FormEditRecep } from "../../components";
import { useParams } from "react-router-dom";
import { AvatarRecepcionista } from "../../assets";

const dataMedico = {
  especialidad: "Especialidad",
  imagen: AvatarRecepcionista,
};

function EditarRecepcionista() {
  const { recepcionistaId } = useParams();
  const [recepcionistaData, setRecepcionistaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://c17-56-t-java-server.onrender.com/api/receptionist/${recepcionistaId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecepcionistaData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [recepcionistaId]);

  if (loading) {
    return <div>Cargando...</div>; // Muestra un estado de carga
  }



  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex xl:justify-start xl:mt-[36px] xl:mb-3 ">
          <h1 className="text-[20px] font-medium text-principal ">
            Editar el perfil recepcionista
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
            <CardForm data={dataMedico} />
          </div>

          <div className="w-[328px] ">
          <FormEditRecep data={recepcionistaData} /> {/* Pasar datos al formulario */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarRecepcionista;
