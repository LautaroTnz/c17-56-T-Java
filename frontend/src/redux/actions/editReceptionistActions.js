// editReceptionistActions.js
import {
    editReceptionistStart,
    editReceptionistSuccess,
    editReceptionistFailure,
  } from '../reducer/editReceptionistSlice';
  
  export const editReceptionist = (receptionistId, receptionistData) => async (dispatch) => {
    dispatch(editReceptionistStart());
    try {
      const response = await fetch(
        `https://c17-56-t-java-server.onrender.com/api/receptionist/update/${receptionistId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(receptionistData),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to edit receptionist');
      }
  
      const updatedReceptionist = await response.json();
      dispatch(editReceptionistSuccess(updatedReceptionist));
    } catch (error) {
      dispatch(editReceptionistFailure(error.message));
    }
  };
  