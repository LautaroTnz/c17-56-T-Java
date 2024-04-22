import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Searchbar, TableRegistros, TableRegistrosMobile } from '../../components'
import { fetchDoctors } from "../../redux/actions/doctorActions"; 
import { fetchSpecialties } from "../../redux/actions/actions";


function RegistroMedico() {
 /* Especialidades */
 const dispatch = useDispatch();
 const especialidades = useSelector((state) => state.specialty.especialidades);
 const loading = useSelector((state) => state.specialty.loading);
 const error = useSelector((state) => state.specialty.error);

 // Selector y carga para los médicos
 const doctors = useSelector((state) => state.doctor.doctors);
 const doctorLoading = useSelector((state) => state.doctor.loading);
 const doctorError = useSelector((state) => state.doctor.error);

  // Estados para búsqueda y filtro de especialidad
const [searchTerm, setSearchTerm] = useState("");
 const [selectedSpeciality, setSelectedSpeciality] = useState(null);


 // Despachadores
 useEffect(() => {
   dispatch(fetchSpecialties());
   dispatch(fetchDoctors());
 }, [dispatch]);

 // Filtrar por nombre y especialidad seleccionada
 const filteredDoctors = doctors
 .filter((doctor) => 
   doctor.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
   (!selectedSpeciality || doctor.speciality === selectedSpeciality)
 );

  return (
    <div className='flex justify-center '>
      <div className='w-full
    mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0'>

        <div className='hidden xl:flex
        xl:ml-[62px] xl:mt-[36px]'>
          <h1 className="text-[20px] text-principal font-medium">Registro de médicos</h1>
        </div>


        <div className='flex xl:ml-[62px] xl:mt-[13px]'>
        <Searchbar
            onSearchChange={setSearchTerm}
            onSpecialityChange={setSelectedSpeciality} // Aquí se pasa la función para cambiar especialidad
            especialidades={especialidades}
          />        </div>

        <div className='text-primarygrey  md:justify-center md:gap-48
        xl:hidden flex flex-row justify-between mt-[30px]'>
          <h1>Nombre</h1>
          <h1>Acciones</h1>
        </div>

        <div className=''>
          <div className='xl:hidden flex'>
          <TableRegistrosMobile dataRegistros={filteredDoctors} especialidades={especialidades} />
          </div>
          <div className='hidden xl:flex w-[1152px] ml-[62px] mt-[45px]'>
          <TableRegistros dataRegistros={filteredDoctors} especialidades={especialidades} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default RegistroMedico