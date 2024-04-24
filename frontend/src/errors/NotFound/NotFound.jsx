import React from "react";
import { img404 } from "../../assets";

function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <img src={img404} alt="error" className="xl:w-[712px] xl:h-[433px] w-[310px] h-[189px]" />
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-col">
              <h1 className="text-principal xl:text-[28px] text-[14px] mb-[9px] font-medium">Oops, parece que estás en el enlace incorrecto</h1>
              <a
                href="/"
                className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Regresar a casa
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NotFound;