import { useState } from "react";
import { IoSearchOutline, IoFilter, IoChevronDown } from "react-icons/io5";

function Searchbar({ onSearchChange, onSpecialityChange, especialidades }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSpecialitiesDropdown, setShowSpecialitiesDropdown] =
    useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleSpecialityClick = (specialityId) => {
    onSpecialityChange(specialityId);
    setShowSpecialitiesDropdown(false);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    onSearchChange("");
    onSpecialityChange(null);
    setShowSpecialitiesDropdown(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between w-full xl:w-full xl:mr-[40px]">
      <div className="w-full xl:w-[463px] xl:h-[50px] border border-primarygrey rounded-md relative flex items-center">
        <IoSearchOutline className="xl:absolute xl:flex hidden right-4 text-gray-600" />
        <input
          className="w-full h-[46px] pl-5 pr-10"
          type="text"
          placeholder="Nombre"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <IoFilter
          className="xl:hidden absolute right-3 text-gray-600 cursor-pointer"
          onClick={toggleFilters}
        />
      </div>

      {showFilters && (
        <div className="xl:hidden flex flex-row gap-2 mt-2">
          <button
            className="bg-primarygrey w-1/2 h-[50px] rounded-md"
            onClick={handleResetFilters}
          >
            Borrar filtros
          </button>
          {/* Aquí puedes añadir más opciones de filtros si lo necesitas */}
          <div
            className="xl:flex xl:flex-row bg-principal justify-center gap-2 items-center w-[170px] text-white rounded-md relative"
            onClick={() =>
              setShowSpecialitiesDropdown(!showSpecialitiesDropdown)
            }
          >
            <div className="flex flex-row justify-between">
            <button className="w-1/2 h-[50px] ml-2">Especialidad</button>
            <IoChevronDown className="text-white mt-4 mr-2" />
            </div>
            

            {showSpecialitiesDropdown && (
              <div className="absolute top-[50px] w-[170px] text-texto bg-white border border-primarygrey rounded-md z-10">
                <div
                  className="overflow-y-auto" // Scroll vertical
                  style={{ maxHeight: "150px", overflowX: "hidden" }} // Scroll vertical, no horizontal
                >
                  {especialidades.length === 0 ? (
                    <div className="px-4 py-2 text-gray-500">
                      No hay especialidades
                    </div>
                  ) : (
                    especialidades.map((esp) => (
                      <div
                        key={esp.specialityId}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSpecialityClick(esp.specialityId)}
                      >
                        {esp.description}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hidden xl:flex xl:justify-end xl:items-end xl:ml-4 xl:gap-3">
        <div className="xl:flex xl:flex-row bg-principal justify-center gap-2 items-center w-[125px] text-white rounded-md">
          <button
            className="bg-primarygrey w-[125px] h-[50px] rounded-md"
            onClick={handleResetFilters}
          >
            Borrar filtros
          </button>
        </div>

        <div
          className="xl:flex xl:flex-row bg-principal justify-center gap-2 items-center w-[170px] text-white rounded-md relative"
          onClick={() => setShowSpecialitiesDropdown(!showSpecialitiesDropdown)}
        >
          <button className="w-[170px] h-[50px]">Especialidad</button>
          <IoChevronDown className="text-white mr-3" />

          {showSpecialitiesDropdown && (
            <div className="absolute top-[50px] w-[170px] text-texto bg-white border border-primarygrey rounded-md z-10">
              <div
                className="overflow-y-auto" // Scroll vertical
                style={{ maxHeight: "150px", overflowX: "hidden" }} // Scroll vertical, no horizontal
              >
                {especialidades.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500">
                    No hay especialidades
                  </div>
                ) : (
                  especialidades.map((esp) => (
                    <div
                      key={esp.specialityId}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSpecialityClick(esp.specialityId)}
                    >
                      {esp.description}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
