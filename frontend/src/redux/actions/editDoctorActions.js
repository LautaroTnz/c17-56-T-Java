// editDoctorActions.js
import {
    editDoctorStart,
    editDoctorSuccess,
    editDoctorFailure,
  } from '../reducer/editDoctorSlice';
  
  export const editDoctor = (doctorId, doctorData) => async (dispatch) => {
    dispatch(editDoctorStart());
    try {
      const response = await fetch(`https://c17-56-t-java-server.onrender.com/api/doctor/update/${doctorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });
      if (!response.ok) {
        throw new Error('Failed to edit doctor');
      }
      const updatedDoctor = await response.json();
      dispatch(editDoctorSuccess(updatedDoctor));
    } catch (error) {
      dispatch(editDoctorFailure(error.message));
    }
  };
  