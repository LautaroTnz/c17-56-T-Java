// turnActions.js
import {
  createTurnStart,
  createTurnSuccess,
  createTurnFailure,
} from "../reducer/createTurnSlice";

export const createTurnActions = (turnData) => async (dispatch) => {
  dispatch(createTurnStart());
  try {
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/turn/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(turnData),
    });
  
    if (!response.ok) {
      throw new Error('Error al crear el turno');
    }
  
    const data = await response.json(); // Asegúrate de obtener el cuerpo de la respuesta
    dispatch(createTurnSuccess(data)); // Despacha el éxito
  } catch (error) {
    console.error('Error al crear el turno:', error.message);
    dispatch(createTurnFailure(error.message)); // Despacha el error
  }
};
