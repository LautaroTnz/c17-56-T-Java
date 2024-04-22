import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReceptionists } from "../../redux/actions/receptionistsActions";
import {
  SearchbarRecepcionista,
  TableRegistrosMobile,
  TableRegistrosRecep,
} from "../../components";
import { LoadingPage } from "../../layouts";

function RegistroRecepcionista() {
  const dispatch = useDispatch();
  const { receptionists, loading, error } = useSelector(
    (state) => state.receptionists
  );
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    dispatch(fetchReceptionists());
  }, [dispatch]);

  const handleSearchChange = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
  };

  // Filtrar las recepcionistas por el término de búsqueda
  const filteredReceptionists = receptionists.filter((receptionist) =>
    `${receptionist.firstname} ${receptionist.lastname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Muestra el componente de carga si está en estado de carga
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex justify-center  lg:items-center">
      <div className="w-full mt-[80px] ml-4 mr-4 xl:mt-20 xl:ml-24 xl:mr-0 max-w-screen-xl">
        <div className="hidden xl:flex xl:ml-[62px] xl:mt-[36px]">
          <h1>Registro de recepcionistas</h1> {/* Cambiar el título */}
        </div>

        <div className="flex xl:ml-[62px] xl:mt-[13px]">
          <SearchbarRecepcionista onSearchChange={handleSearchChange} />
        </div>

        <div className="text-primarygrey md:justify-center md:gap-48 xl:hidden flex flex-row justify-between mt-[30px]">
          <h1>Nombre</h1>
          <h1>Acciones</h1>
        </div>

        <div>
          <div className="xl:hidden flex">
            <TableRegistrosMobile dataRegistros={filteredReceptionists} />{" "}
            {/* Ajustar los datos */}
          </div>
          <div className="hidden xl:flex w-[1152px] ml-[62px] mt-[45px]">
            <TableRegistrosRecep dataRegistros={filteredReceptionists} />{" "}
            {/* Ajustar los datos */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroRecepcionista;
