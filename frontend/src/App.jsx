import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import {
  Home,
  Login,
  PerfilMedico,
  PerfilRecepcionista,
  RegistroMedico,
  RegistroRecepcionista,
  AgendaRecepcionista,
  AgendaMedico,
  AgendaPaciente,
  HistorialClinica,
  RegistroPaciente,
  SeleccionTurno,
  PerfilPaciente,
  TurnoPaciente,
  EditarMedico,
  EditarRecepcionista,
  CrearReceta,
} from "./pages";
import { NotFound } from "./errors";
import { Navbar, Sidebar, LoadingPage } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  // Definir un estado para controlar la visibilidad de la Navbar y la Sidebar
  const showNavbarAndSidebar = !["/"].includes(location.pathname);

  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar si se está cargando

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
    setLoading(false); // Marca el estado de carga como falso una vez que se haya verificado la autenticación
  }, []);

  const handleLogin = (role) => {
    // Guardar el rol del usuario en el localStorage después de iniciar sesión
    localStorage.setItem("userRole", role);
    setUserRole(role);
  };

  const handleLogout = () => {
    // Eliminar el rol del usuario del localStorage al cerrar sesión
    localStorage.removeItem("userRole");
    setUserRole(null);
  };

  const redirectToLogin = () => {
    window.location.href = "/"; // Redirige al usuario a la página de inicio de sesión
  };

  console.log("userRole", userRole);

  if (loading) {
    return <LoadingPage />; // Renderiza la página de carga si se está cargando
  }

  return (
    <div className="font-poppins">
      <>
        {/* Mostrar la Navbar y la Sidebar según el estado */}
        {showNavbarAndSidebar && (
          <>
            <Navbar onLogout={handleLogout} redirectToLogin={redirectToLogin} />
            <Sidebar />
          </>
        )}
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          {userRole !== null && (
            <>
              {userRole === "admin" && (
                <>
                  <Route path="/inicio" element={<Home />} />
                  <Route path="/perfilmedico" element={<PerfilMedico />} />
                  <Route
                    path="/perfilrecepcionista"
                    element={<PerfilRecepcionista />}
                  />
                  <Route path="/registromedico" element={<RegistroMedico />} />
                  <Route
                    path="/registrorecepcionista"
                    element={<RegistroRecepcionista />}
                  />
                  <Route
                    path="/editarmedico/:medicoId"
                    element={<EditarMedico />}
                  />
                  <Route
                    path="/editarreceptionista/:recepcionistaId"
                    element={<EditarRecepcionista />}
                  />
                </>
              )}
              {userRole === "medico" && (
                <>
                  <Route path="/agendamedico" element={<AgendaMedico />} />
                  <Route
                    path="/historiaclinica"
                    element={<HistorialClinica />}
                  />
                  <Route
                    path="/registropaciente"
                    element={<RegistroPaciente />}
                  />
                  <Route path="/perfilpaciente" element={<PerfilPaciente />} />
                  <Route
                    path="/crearreceta"
                    element={<CrearReceta />}
                  />
                </>
              )}
              {userRole === "recepcionista" && (
                <>
                  <Route
                    path="/agendarecepcionista"
                    element={<AgendaRecepcionista />}
                  />
                  <Route
                    path="/registropaciente"
                    element={<RegistroPaciente />}
                  />
                  <Route path="/seleccionturno" element={<SeleccionTurno />} />
                  <Route path="/perfilpaciente" element={<PerfilPaciente />} />
                </>
              )}
              {userRole === "paciente" && (
                <>
                  <Route path="/agendapaciente" element={<AgendaPaciente />} />
                  <Route
                    path="/elegirturnopaciente"
                    element={<TurnoPaciente />}
                  />
                </>
              )}
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;