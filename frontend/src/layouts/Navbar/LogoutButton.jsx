// LogoutButton.jsx
import React from 'react';
import {  useNavigate } from 'react-router-dom';


function LogoutButton({ onLogout, redirectToLogin }) {
    const handleLogout = () => {
        onLogout(); // Llama a la función de logout proporcionada
        redirectToLogin(); // Redirige al usuario a la página de inicio de sesión
    };

    console.log('redirectToLogin se llamó'); // Agrega un console.log para verificar si redirectToLogin se llama correctamente

    return (
        <button onClick={handleLogout} className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded">
            Logout
        </button>
    );
}

export default LogoutButton;