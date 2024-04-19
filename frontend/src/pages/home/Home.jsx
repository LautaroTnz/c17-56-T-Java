import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardRecepcionista, CardUniones, InicioTable } from "../../components";
import { fetchSpecialties } from "../../redux/actions/actions";
import { fetchDoctors } from "../../redux/actions/doctorActions";
import { AvatarPaciente, AvatarRecepcionista, Avatarmedico } from "../../assets";

const data = [
  {
    nombre: "Adrian",
    especialidad: "Cirujano",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Monchi",
    especialidad: "Chaman",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Carlos",
    especialidad: "Dermatólogo",
    estado: "Desactivo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Daniela",
    especialidad: "Cardiólogo",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Esteban",
    especialidad: "Neurólogo",
    estado: "Desactivo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Fernanda",
    especialidad: "Oftalmólogo",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Gabriel",
    especialidad: "Ginecólogo",
    estado: "Desactivo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Hugo",
    especialidad: "Endocrinólogo",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Irene",
    especialidad: "Urología",
    estado: "Activo",
    mail: "ejemplo@gmail.com",
  },
  {
    nombre: "Javier",
    especialidad: "Psiquiatra",
    estado: "Desactivo",
    mail: "ejemplo@gmail.com",
  },
];

const estadisticas1 = {
  titulo: "Pacientes",
  subtitulo: "Pacientes último semestre",
  avatar: AvatarPaciente,
  pacientes: "105K",
  descripcion: "100 pacientes se unieron esta semana",
};

const estadisticas2 = {
  titulo: "Doctores",
  subtitulo: "Recepcionistas en el último semestre",
  avatar: Avatarmedico,
  pacientes: "50+",
  descripcion: "3 doctores se crearon esta semana",
};

const estadisticas3 = {
  titulo: "Recepcionistas",
  subtitulo: "Doctores en el último semestre",
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





  useEffect(() => {
    dispatch(fetchSpecialties());
    // Despachar la acción para cargar médicos
    dispatch(fetchDoctors());
  }, [dispatch]);

  if (doctorLoading) {
    return <div>Cargando datos de médicos...</div>;
  }

  if (doctorError) {
    return <div>Error al cargar datos de médicos: {doctorError}</div>;
  }

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error al cargar datos: {errorSpecialties || errorDoctors}</div>;
  }

  console.log('Estas especialidades recibod en Home: ',especialidades);
  console.log('Estos dotores en Home: ',doctors);

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