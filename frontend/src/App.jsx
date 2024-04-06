import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Home, Login } from './pages';
import { NotFound } from './errors';
import { Navbar, Sidebar } from './layouts';

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
  const showNavbarAndSidebar = !['/'].includes(location.pathname);

  return (
    <>
      {/* Mostrar la Navbar y la Sidebar según el estado */}
      {showNavbarAndSidebar && (
        <>
          <Navbar />
          <Sidebar />
        </>
      )}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;