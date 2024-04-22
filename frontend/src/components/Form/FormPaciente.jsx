import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatientActions } from "../../redux/actions/createPatientActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function FormPaciente() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    lastname: "",
    firstname: "",
    country: "",
    dni: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname") {
      setFormData({ 
        ...formData, 
        firstname: value, 
        username: value, // Esto hace que 'firstname' y 'username' sean iguales
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario antes de enviar:", formData); // registra el contenido de formData

    MySwal.fire({
      title: "¿Deseas crear un nuevo paciente?",
      text: "Confirma tu acción",
      icon: "question",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: "No Guardar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const patientId = Math.floor(Math.random() * 100) + 1;

        const patientData = {
          ...formData,
          role: "PACIENTE",
          patientId,
        };

        dispatch(createPatientActions(patientData))
          .then(() => {
            MySwal.fire({
              icon: "success",
              title: "¡Éxito!",
              text: "El paciente se ha creado correctamente.",
            });

            // Limpiar el formulario después de enviar
            setFormData({
              username: "",
              password: "",
              email: "",
              lastname: "",
              firstname: "",
              country: "",
              dni: "",
              phone: "",
            });
          })
          .catch((error) => {
            MySwal.fire({
              icon: "error",
              title: "¡Error!",
              text: "Hubo un problema al crear el paciente. Por favor, inténtalo de nuevo.",
            });
          });
      } else if (result.isDenied) {
        setFormData({
          username: "",
          password: "",
          email: "",
          lastname: "",
          firstname: "",
          country: "",
          dni: "",
          phone: "",
        });
      }
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
                htmlFor="firstname"
                className="block text-texto font-meduim mb-2 "
              >
                Nombre:
              </label>
              <input
                onChange={handleChange}
                value={formData.firstname}
                type="text"
                id="firstname"
                name="firstname"
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
                htmlFor="lastname"
                className="block text-texto font-meduim mb-2"
              >
                Apellido:
              </label>
              <input
                onChange={handleChange}
                value={formData.lastname}
                type="text"
                id="lastname"
                name="lastname"
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
                htmlFor="birthdate"
                className="block text-texto font-meduim mb-2"
              >
                Fecha de nacimiento:
              </label>
              <input
                type="text"
                id="birthdate"
                name="birthdate"
                placeholder="00/00/0000"
                className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px]
              h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div
              className="xl:gap-3
            mb-4 flex flex-col gap-2.5"
            >
              <label
                htmlFor="country"
                className="block text-texto font-meduim mb-2"
              >
                Dirección:
              </label>
              <input
                onChange={handleChange}
                value={formData.country}
                type="text"
                id="country"
                name="country"
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
                htmlFor="phone"
                className="block text-texto font-meduim mb-2"
              >
                Teléfono:
              </label>
              <input
                onChange={handleChange}
                value={formData.phone}
                type="text"
                id="phone"
                name="phone"
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
              className="placeholder:text-textoinputs placeholder:text-[16px] xl:h-[50px] xl:w-[350px] placeholder:text-textoinputs placeholder:text-[16px]
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

export default FormPaciente;
