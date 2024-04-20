import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdownsespecialidades({ especialidades, onChange }) {
  const [selectedSpecialityId, setSelectedSpecialityId] = useState(null);

  const handleSpecialitySelect = (specialityId) => {
    setSelectedSpecialityId(specialityId);
    // Llama a la función de devolución de llamada para pasar el ID de la especialidad seleccionada al componente padre
    onChange(specialityId);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="xl:w-full w-full h-[50px] rounded-[5px] bg-white">
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-white px-3 mt-3 text-textoinputs text-[16px] hover:bg-gray-50">
          {selectedSpecialityId
            ? especialidades.find(
                (especialidad) =>
                  especialidad.specialityId === selectedSpecialityId
              )?.description
            : "Especialidad"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-full right-0 z-10 mt-2 max-h-60 overflow-y-auto w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {especialidades.map((especialidad) => (
              <Menu.Item key={especialidad.specialityId}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-primaryazul text-white" : "text-black",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() =>
                      handleSpecialitySelect(especialidad.specialityId)
                    }
                  >
                    {especialidad.description}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdownsespecialidades;
