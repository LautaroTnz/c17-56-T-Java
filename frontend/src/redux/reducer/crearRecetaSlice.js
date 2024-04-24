import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para el slice de recetas
const initialState = {
  receta: null, // Receta creada
  loading: false, // Indicador de carga
  error: null, // Errores si los hay
};

// Crear el slice para la receta
export const crearRecetaSlice = createSlice({
  name: 'receta',
  initialState,
  reducers: {
    createPrescriptionStart(state) {
      state.loading = true; // Empieza la carga
      state.error = null; // Limpiar errores anteriores
    },
    createPrescriptionSuccess(state, action) {
      state.loading = false; // Carga completa
      state.receta = action.payload; // Receta creada
    },
    createPrescriptionFailure(state, action) {
      state.loading = false; // Termina la carga
      state.error = action.payload; // Guardar el mensaje de error
    },
  },
});

export const { createPrescriptionStart, createPrescriptionSuccess, createPrescriptionFailure } = crearRecetaSlice.actions; // Exportar las acciones
export default crearRecetaSlice.reducer; // Exportar el reducer
