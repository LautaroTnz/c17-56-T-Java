// doctorActions.js
import { createDoctorStart, createDoctorSuccess, createDoctorFailure } from '../reducer/createDoctorSlice';

export const createDoctorActions = (doctorData) => async (dispatch) => {
  dispatch(createDoctorStart());
  try {
    console.log('Enviando solicitud para crear médico...');
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/doctor/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });
    if (!response.ok) {
      throw new Error('Failed to create doctor');
    }
    const data = await response.json();
    console.log('Médico creado:', data); // Log para mostrar los datos del médico creado
    dispatch(createDoctorSuccess(data));
  } catch (error) {
    console.error('Error al crear médico:', error.message); // Log para mostrar el error en caso de fallo
    dispatch(createDoctorFailure(error.message));
  }
};
