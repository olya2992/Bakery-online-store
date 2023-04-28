import { configureStore } from '@reduxjs/toolkit'
import cakes from './CakesSlice'
import cart from './CartSlice'

export const store = configureStore({
    reducer: {
   cakes,
   cart
    },
  })