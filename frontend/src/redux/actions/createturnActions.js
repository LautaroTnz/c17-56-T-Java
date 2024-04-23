// turnActions.js
import { createTurnStart, createTurnSuccess, createTurnFailure } from '../reducer/createTurnSlice';

export const createTurnActions = (turnData) => async (dispatch) => {
  dispatch(createTurnStart());
  try {
    console.log('Enviando solicitud para crear turno...');
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/turn/save', {
      method: 'PUT', // El método HTTP para el endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(turnData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el turno');
    }

    const data = await response.json();
    console.log('Turno creado:', data); // Log para depuración
    dispatch(createTurnSuccess(data));
  } catch (error) {
    console.error('Error al crear el turno:', error.message); // Log para depuración de errores
    dispatch(createTurnFailure(error.message));
  }
};
