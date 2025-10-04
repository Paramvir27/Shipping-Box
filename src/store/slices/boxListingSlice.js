import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shippingBoxList: [],
};


export const boxListingSlice = createSlice({
  name: 'boxListing',
  initialState,
  reducers: {
    addShippingBox: (state, action) => {
      state.shippingBoxList.push(action.payload);
    }
  }
})

export const {
  addShippingBox
} = boxListingSlice.actions

export default boxListingSlice.reducer
