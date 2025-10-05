import { createSlice } from '@reduxjs/toolkit'
import boxListing from '../../fixtures/boxListing.json';

const initialState = {
  shippingBoxList: boxListing,
};


export const boxListingSlice = createSlice({
  name: 'boxListing',
  initialState,
  reducers: {
    addShippingBox: (state, action) => {
      state.shippingBoxList.unshift(action.payload);
    }
  }
})

export const {
  addShippingBox
} = boxListingSlice.actions

export default boxListingSlice.reducer
