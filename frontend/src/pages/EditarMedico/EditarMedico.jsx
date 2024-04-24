import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardForm, FormEditMedic } from "../../components";
import { fetchSpecialties } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Avatarmedico } from "../../assets";

const dataMedico = {
  especialidad: "Especialidad",
  imagen: Avatarmedico,
};

function EditarMedico() {
  const dispatch = useDispatch();
  const especialidades = useSelector((state) => state.specialty.especialidades);
  const { medicoId } = useParams(); // Obtener el ID del médico de los parámetros de la URL
  const [medicoData, setMedicoData] = useState(null); // Estado para almacenar los datos del médico
  const doctors = useSelector((state) => state.doctor.doctors);

  // Despachadores
  useEffect(() => {
    // Lógica para cargar los datos del médico utilizando medicoId
    fetch(`https://c17-56-t-java-server.onrender.com/api/doctor/find/${medicoId}`)
      .then(response => response.json())
      .then(data => {
        setMedicoData(data);
        // Encuentra el médico en doctors y actualiza formData
        const foundDoctor = doctors.find(doctor => doctor.id === parseInt(medicoId));
        if (foundDoctor) {
          setFormData(foundDoctor);
        }
      })
      .catch(error => console.error("Error fetching medico data:", error));
  }, [dispatch, medicoId, doctors]);

  console.log('medicoData de EditarMedico: ', medicoData)
  console.log('especialidades de EditarMedico: ', especialidades)
  console.log('medicoId de de EditarMedico: ', medicoId)

  return (
    <div className="flex justify-center">
      <div
        className="
            mt-[100px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0"
      >
        <div className="hidden xl:flex xl:justify-start xl:mt-[36px] xl:mb-3 ">
          <h1 className="text-[20px] font-medium text-principal ">
            Editar el perfil médico
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
            <CardForm data={dataMedico} especialidades={especialidades} />
          </div>

          <div className="w-[328px] ">
            <FormEditMedic data={medicoData} especialidades={especialidades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarMedico;
