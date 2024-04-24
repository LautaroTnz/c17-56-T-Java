import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownsTurn({ options, onChange, selected }) {
  const hasOptions = options.length > 0; // Verificar si hay médicos disponibles

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-primarygrey ">
        <Menu.Button className="inline-flex w-full justify-between rounded-md bg-white px-3 mt-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
          {selected
            ? selected.label
            : hasOptions
            ? "Seleccione un médico"
            : "No hay médicos disponibles en esa especialidad"}

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
        <Menu.Items className="absolute w-full right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <Menu.Item key={option.value}>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                  onClick={() => onChange(option)}
                >
                  {option.label}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownsTurn;
