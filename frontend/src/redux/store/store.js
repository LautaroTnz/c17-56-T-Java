// store.js
import { configureStore } from '@reduxjs/toolkit'
import specialtySlice from '../reducer/specialtySlice'
import doctorSlice from '../reducer/doctorSlice' 


export const store = configureStore({
  reducer: {
    specialty: specialtySlice,
    doctor: doctorSlice 
  },
})