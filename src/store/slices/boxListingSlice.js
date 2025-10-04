import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shippingBoxList: [],
};


export const boxListingSlice = createSlice({
  name: 'boxListing',
  initialState,
  reducers: {
    setShippingBoxList: (state, action) => {
      state.shippingBoxList = action.payload
    }
  }
})

export const {

} = boxListingSlice.actions

export default boxListingSlice.reducer
