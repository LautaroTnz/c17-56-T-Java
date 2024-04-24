// actions.js
import { fetchSpecialtiesStart, fetchSpecialtiesSuccess, fetchSpecialtiesFailure } from '../reducer/specialtySlice';

export const fetchSpecialties = () => async (dispatch) => {
  dispatch(fetchSpecialtiesStart());
  try {
    console.log('Iniciando solicitud de especialidades...');
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/specialty/findall');
    if (!response.ok) {
      throw new Error('Failed to fetch specialties');
    }
    const data = await response.json();
    console.log('Especialidades recibidas:', data);
    dispatch(fetchSpecialtiesSuccess(data));
  } catch (error) {
    console.error('Error al obtener especialidades:', error.message);
    dispatch(fetchSpecialtiesFailure(error.message));
  }
};