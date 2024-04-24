// store.js
import { configureStore } from '@reduxjs/toolkit'
import specialtySlice from '../reducer/specialtySlice'
import doctorSlice from '../reducer/doctorSlice' 
import deleteMedicSlice from '../reducer/deleteMedicSlice'
import editDoctorSlice from '../reducer/editDoctorSlice'
import receptionistsSlice from '../reducer/receptionistsSlice'
import deleteReceptionistSlice from '../reducer/deleteReceptionistSlice'
import editReceptionistSlice from '../reducer/editReceptionistSlice'
import createPatientSlice from '../reducer/createPatientSlice'
import patientSlice from '../reducer/patientSlice'
import turnSlice from '../reducer/turnSlice'
import createTurnSlice from '../reducer/createTurnSlice'
import deletedTurnSlice from '../reducer/deletedTurnSlice'
import crearRecetaSlice from '../reducer/crearRecetaSlice'

export const store = configureStore({
  reducer: {
    specialty: specialtySlice,
    doctor: doctorSlice,
    deleteMedic: deleteMedicSlice,
    editDoctor: editDoctorSlice,
    receptionists: receptionistsSlice,
    deleteReceptionist: deleteReceptionistSlice,
    editReceptionist: editReceptionistSlice,
    createPatient: createPatientSlice,
    patient: patientSlice,
    turns: turnSlice,
    createTurn: createTurnSlice,
    deletedTurn: deletedTurnSlice,
    receta: crearRecetaSlice,

  },
})