import { configureStore } from '@reduxjs/toolkit'
import ContactReducer from '../Slices/ContactSlice'

export const store = configureStore({
  reducer: {
    contact: ContactReducer,
  },
})