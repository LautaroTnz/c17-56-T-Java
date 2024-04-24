import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDoctorActions } from "../../redux/actions/createDoctorActions";
import Dropdownsespecialidades from "../Dropdowns/Dropdownsespecialidades";
import DropdownsespecialidadesForm from "../Dropdowns/DropdownsespecialidadesForm";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Form({ data, especialidades }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    especialidad: null, // ID de especialidad seleccionada
    direccion: "",
    telefono: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    MySwal.fire({
      title: "¿Deseas crear un nuevo médico?",
      text: "Por favor, elige una opción:",
      icon: "question",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: "No guardar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const medicalId = Math.floor(Math.random() * 100) + 1;
        const medico = {
          username: formData.nombre,
          password: formData.password,
          email: formData.email,
          firstname: formData.nombre,
          lastname: formData.apellido,
          country: formData.direccion,
          dni: formData.dni,
          role: "MEDICO",
          speciality: formData.especialidad,
          medicalId,
          active: true,
        };

        // Enviar solicitud POST al servidor
        dispatch(createDoctorActions(medico))
          .then(() => {
            MySwal.fire({
              icon: "success",
              title: "¡Éxito!",
              text: "El médico se ha creado correctamente.",
            });
            // Limpiar los campos del formulario después de enviarlos
            setFormData({
              nombre: "",
              apellido: "",
              dni: "",
              especialidad: null,
              direccion: "",
              telefono: "",
              email: "",
              password: "",
            });
          })
          .catch((error) => {
            MySwal.fire({
              icon: "error",
              title: "¡Error!",
              text: "Hubo un problema al crear el médico. Por favor, inténtalo de nuevo.",
            });
          });
      } else if (result.isDenied) {
        // No guardar, limpiar el formulario
        setFormData({
          nombre: "",
          apellido: "",
          dni: "",
          especialidad: null,
          direccion: "",
          telefono: "",
          email: "",
          password: "",
        });
      }
      // Si es cancelado, no hacer nada, solo cerrar el diálogo.
    });
  };

  return (
    <div className="p-4 ">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 text-texto mb-[54px] "
      >
        <div className="xl:flex xl:flex-row gap-5">
          {/* Primer grupo */}
          <div className="xl:flex xl:flex-col">
            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="nombre"
                className="block text-texto font-meduim mb-2 "
              >
                Nombre:
              </label>
              <input
                onChange={handleChange}
                value={formData.nombre}
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="apellido"
                className="block text-texto font-meduim mb-2"
              >
                Apellido:
              </label>
              <input
                onChange={handleChange}
                value={formData.apellido}
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="dni"
                className="block text-texto font-meduim mb-2"
              >
                DNI:
              </label>
              <input
                onChange={handleChange}
                value={formData.dni}
                type="text"
                id="dni"
                name="dni"
                placeholder="DNI"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Segundo grupo */}
          <div className="xl:flex xl:flex-col">
            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="especialidad"
                className="block text-texto font-meduim mb-2"
              >
                Especialidad:
              </label>
              <div className="xl:w-[488.14px] w-[328px] h-[50px]" >
                <DropdownsespecialidadesForm
                
                  especialidades={especialidades}
                  onChange={(selectedId) =>
                    setFormData({ ...formData, especialidad: selectedId })
                  }
                />
              </div>
            </div>

            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="direccion"
                className="block text-texto font-meduim mb-2"
              >
                Dirección:
              </label>

              <input
                onChange={handleChange}
                value={formData.direccion}
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Dirección"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="telefono"
                className="block text-texto font-meduim mb-2"
              >
                Teléfono:
              </label>
              <input
                onChange={handleChange}
                value={formData.telefono}
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        <h1
          className="xl:mt-0 xl:mb-0
        text-[18px] font-medium mb-6 mt-9"
        >
          Datos de la cuenta
        </h1>
        {/* Tercer grupo */}
        <div className="xl:flex xl:flex-row xl:gap-5">
          <div className="mb-4 flex flex-col gap-2.5">
            <label
              htmlFor="email"
              className="block text-texto font-meduim mb-2"
            >
              Correo electrónico:
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
            h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div
            className="xl:mb-0
          mb-6 flex flex-col gap-2.5"
          >
            <label
              htmlFor="password"
              className="block text-texto font-meduim mb-2"
            >
              Contraseña:
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
            h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        {/* Botones */}
        <div
          className="xl:flex xl:justify-end xl:gap-5 xl:ml-[724px] xl:mt-[-30px]
        flex justify-end gap-5 "
        >
          <button
            type="button"
            className="w-[104px] h-[39px] text-[14px] text-texto hover:bg-celestetreinta font-medium py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-[104px] h-[39px] text-[14px] bg-primaryazul hover:bg-blue-700 text-white font-medium py-2 px-5 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
