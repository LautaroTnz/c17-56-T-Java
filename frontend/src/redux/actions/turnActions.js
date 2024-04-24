import axios from 'axios';
import {
  fetchTurnsStart,
  fetchTurnsSuccess,
  fetchTurnsFailure,
} from '../reducer/turnSlice';

const BASE_URL = 'https://c17-56-t-java-server.onrender.com/api/turn';

export const fetchTurns = () => async (dispatch) => {
  dispatch(fetchTurnsStart());
  try {
    const response = await axios.get(`${BASE_URL}/findall`);
    
    if (response.status !== 200) {
      throw new Error('Error al obtener turnos');
    }

    const data = response.data;
    console.log('Turnos:', data);
    dispatch(fetchTurnsSuccess(data));
   
  } catch (error) {
    dispatch(fetchTurnsFailure(error.message));
  }
};
