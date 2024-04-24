import { createPrescriptionStart, createPrescriptionSuccess, createPrescriptionFailure } from '../reducer/crearRecetaSlice';

export const crearRecetaActions = (recetaData) => async (dispatch) => {
  dispatch(createPrescriptionStart()); // Marca el inicio de la acción
  try {
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/prescription/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recetaData), // Convertir el objeto receta a JSON
    });

    if (!response.ok) {
      throw new Error('Error al crear receta'); // Manejo de error para una respuesta no exitosa
    }

    const data = await response.json(); // Obtener datos del resultado
    dispatch(createPrescriptionSuccess(data)); // Acción para una solicitud exitosa
  } catch (error) {
    console.error('Error al crear receta:', error.message); // Mostrar el error
    dispatch(createPrescriptionFailure(error.message)); // Acción para un error
  }
};
