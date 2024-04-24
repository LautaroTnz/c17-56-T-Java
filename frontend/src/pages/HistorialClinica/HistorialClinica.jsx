import React from "react";
import { HistoriaClinica, TablaHistoriaClinica } from "../../components";

function HistorialClinica() {
  const historialMedico = {
    paciente: "Pepe",
    numeroAfiliado: "Nro. de afiliado",
    edad: "55 años",
    sexo: "Masculino",
    antecedentesPersonales: [
      "Dislipidemia",
      "Diabetes mellitus tipo 2",
      "Obesidad",
    ],
    antecedentesFamiliares: ["Padre con hipertencion arterial"],
    examenFisico: {
      presionArterial: "120/80 mmHg",
      frecuenciaCardiaca: "75 lpm",
    },
    motivoConsulta: "Revisión de rutina",
    historiaEnfermedadActual:
      "El paciente refiere que hace 3 años le diagnosticaron hipertensión arterial. En ese momento, su presión arterial era de 160/90 mmHg. Se le inició tratamiento con enalapril 10 mg al día, pero no ha logrado controlar la presión arterial.",
    electrocardiograma: "Normal",
  };

  const registrosHistoriaClinica = [
    { fecha: "11/04/2024", especialidad: "Cirujano", doctor: "Juan Pérez" },
    { fecha: "12/04/2024", especialidad: "Cardiólogo", doctor: "María García" },
    {
      fecha: "13/04/2024",
      especialidad: "Dermatólogo",
      doctor: "Luis Martínez",
    },
    { fecha: "14/04/2024", especialidad: "Pediatra", doctor: "Ana Rodríguez" },
    {
      fecha: "15/04/2024",
      especialidad: "Oftalmólogo",
      doctor: "Carlos Sánchez",
    },
    { fecha: "16/04/2024", especialidad: "Neurólogo", doctor: "Laura Gómez" },
    { fecha: "17/04/2024", especialidad: "Ginecólogo", doctor: "Miguel López" },
    {
      fecha: "18/04/2024",
      especialidad: "Urología",
      doctor: "Elena Fernández",
    },
    {
      fecha: "19/04/2024",
      especialidad: "Endocrinólogo",
      doctor: "Diego Ruiz",
    },
    {
      fecha: "20/04/2024",
      especialidad: "Nutricionista",
      doctor: "Marina González",
    },
    { fecha: "21/04/2024", especialidad: "Psicólogo", doctor: "Sofía Pérez" },
    {
      fecha: "22/04/2024",
      especialidad: "Fisioterapeuta",
      doctor: "Antonio Martín",
    },
    { fecha: "23/04/2024", especialidad: "Oncólogo", doctor: "Patricia Díaz" },
    { fecha: "24/04/2024", especialidad: "Psiquiatra", doctor: "Javier Soto" },
    { fecha: "25/04/2024", especialidad: "Dentista", doctor: "Rosa Navarro" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className=" ml-4 mr-4 xl:mt-[46px] xl:ml-[50px] xl:flex xl:flex-col xl:mr-10 ">
          <h1 className="mb-4 text-[14px] xl:text-[20px] text-principal font-medium">
            Historia clínica
          </h1>
          <HistoriaClinica event={{ historialMedico }} />
        </div>
        <div className="xl:mt-10 xl:mb-[-80px] xl:flex xl:justify-end xl:mr-14">
          <a href="/crearreceta">
            <button className="xl:w-[149px] w-full xl:mt-0 mt-5 h-[39px] bg-principal text-[12px] text-white rounded-md">
              Agregar historía
            </button>
          </a>
        </div>

        <div className="xl:flex xl:item-center xl:justify-center xl:text-center xl:mt-[90px] mt-[20px]">
          <TablaHistoriaClinica registros={registrosHistoriaClinica} />
        </div>
      </div>
    </div>
  );
}

export default HistorialClinica;
