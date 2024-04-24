// deleteReceptionistActions.js
import {
    deleteReceptionistStart,
    deleteReceptionistSuccess,
    deleteReceptionistFailure,
  } from '../reducer/deleteReceptionistSlice';
  import { fetchReceptionists } from './receptionistsActions';
  
  export const deleteReceptionist = (receptionistId) => async (dispatch) => {
    dispatch(deleteReceptionistStart());
    try {
      const response = await fetch(
        `https://c17-56-t-java-server.onrender.com/api/receptionist/delete/${receptionistId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete receptionist');
      }
  
      dispatch(deleteReceptionistSuccess());
      dispatch(fetchReceptionists()); // Recargar la lista de recepcionistas
    } catch (error) {
      dispatch(deleteReceptionistFailure(error.message));
    }
  };
  