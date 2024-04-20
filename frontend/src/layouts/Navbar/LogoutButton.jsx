// LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton({ onLogout, redirectToLogin }) {
  const handleLogout = () => {
    onLogout(); // Llama a la función de logout proporcionada
    redirectToLogin(); // Redirige al usuario a la página de inicio de sesión
  };

  console.log("redirectToLogin se llamó"); // Agrega un console.log para verificar si redirectToLogin se llama correctamente

  return (
    <button
      onClick={handleLogout}
      className="w-[115px] h-[41px] bg-gray-50 hover:bg-gray-300 text-[14px] text-principal font-semibold rounded"
    >
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;