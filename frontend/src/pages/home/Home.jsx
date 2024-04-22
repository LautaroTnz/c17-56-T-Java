import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardRecepcionista, CardUniones, InicioTable } from "../../components";
import { fetchSpecialties } from "../../redux/actions/actions";
import { fetchDoctors } from "../../redux/actions/doctorActions";
import { AvatarPaciente, AvatarRecepcionista, Avatarmedico } from "../../assets";
import {LoadingPage} from "../../layouts";

const estadisticas1 = {
  titulo: "Pacientes",
  subtitulo: "Pacientes último semestre",
  avatar: AvatarPaciente,
  pacientes: "105K",
  descripcion: "100 pacientes se unieron esta semana",
};

const estadisticas2 = {
  titulo: "Doctores",
  subtitulo: "Doctores en el último semestre",
  avatar: Avatarmedico,
  pacientes: "50+",
  descripcion: "3 doctores se crearon esta semana",
};

const estadisticas3 = {
  titulo: "Recepcionistas",
  subtitulo: "Recepcionistas en el último semestre",
  avatar: AvatarRecepcionista,
  pacientes: "105+",
  descripcion: "10 recepcionistas se crearon esta semana",
};

function Home() {
  /* Especialidades */
  const dispatch = useDispatch();
  const especialidades = useSelector((state) => state.specialty.especialidades);
  const loading = useSelector((state) => state.specialty.loading);
  const error = useSelector((state) => state.specialty.error);

  // Selector y carga para los médicos
  const doctors = useSelector((state) => state.doctor.doctors);
  const doctorLoading = useSelector((state) => state.doctor.loading);
  const doctorError = useSelector((state) => state.doctor.error);

  // Despachadores
  useEffect(() => {
    dispatch(fetchSpecialties());
    dispatch(fetchDoctors());
  }, [dispatch]);

   // Muestra el componente de carga si cualquiera de los dos estados está cargando
   if (loading || doctorLoading) {
    return <LoadingPage />;
  }

  // Muestra errores si alguno de los dos estados tiene errores
  if (error || doctorError) {
    return (
      <div>
        Error al cargar datos: {error || doctorError}
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="mt-16 ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0">
        <div className="xl:mt-[52px] xl:ml-[30px] xl:flex  mt-[55px] flex flex-col ">
        <h1 className="mb-[10px] font-medium text-[20px] text-principal">Profesionales activos</h1>
          <div className="xl:flex xl:flex-row flex flex-col gap-y-9 xl:gap-x-9">
            
            <InicioTable data={doctors} especialidades={especialidades} />
            <CardRecepcionista especialidades={especialidades} data={doctors} />
          </div>

          <div className="xl:mt-9 xl:flex xl:flex-row xl:gap-8 flex flex-col gap-9 mt-9 mb-9">
            <CardUniones estadisticas={estadisticas1} />
            <CardUniones estadisticas={estadisticas3} />
            <CardUniones estadisticas={estadisticas2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;