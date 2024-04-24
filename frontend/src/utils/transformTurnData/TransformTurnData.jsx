import dayjs from 'dayjs';

// Define y exporta la función de transformación
export const transformTurnData = (turns) => {
  return turns.map((turn) => ({
    id: turn.id,
    title: turn.title,
    description: turn.description || '', // Puede ser opcional
    start: dayjs(`${turn.date} ${turn.time}`).toDate(),
    end: dayjs(`${turn.date} ${turn.time}`).add(1, 'hour').toDate(), // Ejemplo de duración
    location: turn.location || 'Desconocido', // Campo adicional
  }));
};