// createRecepcionista.js
import { createRecepcionistaStart, createRecepcionistaSuccess, createRecepcionistaFailure } from '../reducer/createRecepcionistaSlice';

export const createRecepcionista = (recepcionistaData) => async (dispatch) => {
  dispatch(createRecepcionistaStart());
  try {
    console.log('Enviando solicitud para crear recepcionista...');
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/receptionist/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recepcionistaData),
    });
    if (!response.ok) {
      throw new Error('Failed to create recepcionista');
    }
    const data = await response.json();
    console.log('Recepcionista creado:', data);
    dispatch(createRecepcionistaSuccess(data));
  } catch (error) {
    console.error('Error al crear recepcionista:', error.message);
    dispatch(createRecepcionistaFailure(error.message));
  }
};
