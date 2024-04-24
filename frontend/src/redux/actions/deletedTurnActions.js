import {
    deleteTurnStart,
    deleteTurnSuccess,
    deleteTurnFailure,
  } from "../reducer/deletedTurnSlice";
  import { fetchTurns } from "./turnActions"; // Para recargar la lista de turnos después de eliminar
  
  export const deleteTurn = (turnId) => async (dispatch) => {
    dispatch(deleteTurnStart());
    try {
      const response = await fetch(
        `https://c17-56-t-java-server.onrender.com/api/turn/delete/${turnId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete turn");
      }
  
      dispatch(deleteTurnSuccess());
      dispatch(fetchTurns()); // Recargar la lista de turnos después de eliminar
    } catch (error) {
      dispatch(deleteTurnFailure(error.message));
    }
  };
  