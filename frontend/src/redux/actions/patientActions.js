import {
    fetchPatientsStart,
    fetchPatientsSuccess,
    fetchPatientsFailure,
  } from '../reducer/patientSlice';
  
  export const fetchPatients = () => async (dispatch) => {
    dispatch(fetchPatientsStart());
    try {
      console.log("Iniciando solicitud de pacientes...");
      
      const response = await fetch('https://c17-56-t-java-server.onrender.com/api/patient/findall');
      
      if (!response.ok) {
        throw new Error('Error al obtener pacientes');
      }
  
      const data = await response.json();
  
      // Log para verificar los datos obtenidos
      console.log("Datos de pacientes recibidos:", data);
  
      dispatch(fetchPatientsSuccess(data));
    } catch (error) {
      console.error("Error durante la solicitud de pacientes:", error);
      dispatch(fetchPatientsFailure(error.message));
    }
  };