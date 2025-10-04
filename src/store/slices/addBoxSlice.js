import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  receiverName: "",
  boxWeight: 0,
  boxColor: "#fff",
  destinationCountry: "",
};


export const addBoxSlice = createSlice({
  name: 'addBox',
  initialState,
  reducers: {
    setReceiverName: (state, action) => {
      state.receiverName = action.payload
    },
    setBoxWeight: (state, action) => {
      state.boxWeight = action.payload
    },
    setBoxColor: (state, action) => {
      state.boxColor = action.payload
    },
    setDestinationCountry: (state, action) => {
      state.destinationCountry = action.payload
    }
  }
})

export const {
  setReceiverName,
  setBoxWeight,
  setBoxColor,
  setDestinationCountry
} = addBoxSlice.actions

export default addBoxSlice.reducer
