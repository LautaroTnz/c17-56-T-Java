export const combineTurnsWithSpecialtiesAndDoctors = (turns, specialties, doctors) => {
  if (!turns || !specialties || !doctors) {
    console.error("Los datos no están completamente cargados.");
    return []; // Devuelve un array vacío para evitar errores
  }

  return turns.map((turn) => {
    const doctor = doctors.find((d) => d.id === turn.doctor);

    // Asegúrate de que `doctor` no sea `undefined` antes de acceder a propiedades
    if (!doctor) {
      console.warn(`No se encontró un médico con ID ${turn.doctor}`);
      return {
        id: turn.id, // Incluir el ID del turno
        fecha: `${turn.date} ${turn.time}`,
        especialidad: "Desconocida",
        doctor: "Desconocido",
      };
    }

    const specialty = specialties.find(
      (s) => s.specialityId === doctor.speciality
    );

    return {
      id: turn.id, // Incluir el ID del turno
      fecha: `${turn.date} ${turn.time}`,
      especialidad: specialty ? specialty.description : "Desconocida",
      doctor: `${doctor.firstname} ${doctor.lastname}`,
    };
  });
};
