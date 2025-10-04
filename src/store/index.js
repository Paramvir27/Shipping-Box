import { configureStore } from '@reduxjs/toolkit'
import boxListingReducer from './slices/boxListingSlice'
import addBoxReducer from './slices/addBoxSlice'

export const store = configureStore({
  reducer: {
    boxListing: boxListingReducer,
    addBox: addBoxReducer
  },
})


