// doctorActions.js
import { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } from '../reducer/doctorSlice';

export const fetchDoctors = () => async (dispatch) => {
  dispatch(fetchDoctorsStart());
  try {
    console.log('Iniciando solicitud de médicos...');
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/doctor/findall');
    if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }
    const data = await response.json();
    console.log('Médicos recibidos:', data); // Log para mostrar los datos recibidos
    dispatch(fetchDoctorsSuccess(data));
  } catch (error) {
    console.error('Error al obtener médicos:', error.message); // Log para mostrar el error en caso de fallo
    dispatch(fetchDoctorsFailure(error.message));
  }
};
