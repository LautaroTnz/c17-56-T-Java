import React from 'react';

function SearchbarSola() {
  return (
    <div className="w-[328px] h-[46px]
    xl:w-[350px] xl:h-[50px] border border-black">
      <input
        type="text"
        className="w-full h-full outline-none"
        placeholder="Buscar..."
      />
    </div>
  );
}

export default SearchbarSola;