// createPatientActions.js
import { createPatientStart, createPatientSuccess, createPatientFailure } from '../reducer/createPatientSlice';

export const createPatientActions = (patientData) => async (dispatch) => {
  dispatch(createPatientStart());
  try {
    const response = await fetch('https://c17-56-t-java-server.onrender.com/api/patient/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });

    if (!response.ok) {
      throw new Error('Failed to create patient');
    }

    const data = await response.json();
    dispatch(createPatientSuccess(data));
  } catch (error) {
    dispatch(createPatientFailure(error.message));
  }
};
