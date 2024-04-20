import { useState } from "react";
import { IoSearchOutline, IoFilter, IoChevronDown } from "react-icons/io5";

function Searchbar({ onSearchChange, onSpecialityChange, especialidades }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSpecialitiesDropdown, setShowSpecialitiesDropdown] = useState(false);

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

  return (
    <div className="flex items-center justify-center xl:justify-between xl:flex xl:flex-row xl:w-full xl:mr-[40px]">
      <div className="xl:w-[463px] xl:h-[50px] w-[328px] border border-primarygrey rounded-md relative flex items-center">
        <IoSearchOutline className="absolute right-4 text-gray-600" />
        <input
          className="w-full h-[46px] pl-5 pr-10"
          type="text"
          placeholder="Nombre"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <IoFilter className="xl:hidden absolute right-3 text-gray-600 cursor-pointer" />
      </div>

      <div className="hidden xl:flex xl:justify-end xl:items-end xl:ml-4 xl:gap-3">
        <div className="xl:flex xl:flex-row bg-principal justify-center gap-2 items-center w-[125px] text-white rounded-md">
          <button className="w-[125px] h-[50px]" onClick={handleResetFilters}>Borrar filtros</button>
          
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
                style={{ maxHeight: '150px', overflowX: 'hidden' }} // Scroll vertical, no horizontal
              >
                {especialidades.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500">No hay especialidades</div>
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
