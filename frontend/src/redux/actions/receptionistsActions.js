// receptionistsActions.js
import {
    fetchReceptionistsStart,
    fetchReceptionistsSuccess,
    fetchReceptionistsFailure,
  } from '../reducer/receptionistsSlice';
  
  export const fetchReceptionists = () => async (dispatch) => {
    dispatch(fetchReceptionistsStart());
    try {
      const response = await fetch('https://c17-56-t-java-server.onrender.com/api/receptionist/findall');
      if (!response.ok) {
        throw new Error('Failed to fetch receptionists');
      }
      const data = await response.json();
      dispatch(fetchReceptionistsSuccess(data));
    } catch (error) {
      dispatch(fetchReceptionistsFailure(error.message));
    }
  };
  