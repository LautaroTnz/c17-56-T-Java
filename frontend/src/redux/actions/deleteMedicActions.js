// deleteMedicActions.js
import {
    deleteMedicStart,
    deleteMedicSuccess,
    deleteMedicFailure,
  } from "../reducer/deleteMedicSlice";
  import { fetchDoctors } from "./doctorActions"; // Importar la acción para recargar la lista de médicos
  
  export const deleteMedic = (medicId) => async (dispatch) => {
    dispatch(deleteMedicStart());
    try {
      const response = await fetch(`https://c17-56-t-java-server.onrender.com/api/doctor/delete/${medicId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete medic");
      }
  
      dispatch(deleteMedicSuccess());
      dispatch(fetchDoctors()); // Recargar la lista de médicos después de eliminar
    } catch (error) {
      dispatch(deleteMedicFailure(error.message));
    }
  };
  