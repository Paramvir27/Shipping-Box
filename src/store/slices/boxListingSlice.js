import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shippingBoxList: [
    {
      "id": 1728456789001,
      "receiverName": "John Anderson",
      "boxWeight": 5.5,
      "boxColor": "#2196f3",
      "destinationCountry": "united states",
      "shippingCharge": 137.50
    },
    {
      "id": 1728456789002,
      "receiverName": "Maria Silva",
      "boxWeight": 12.3,
      "boxColor": "#4caf50",
      "destinationCountry": "brazil",
      "shippingCharge": 192.25
    },
    {
      "id": 1728456789003,
      "receiverName": "Rajesh Kumar",
      "boxWeight": 8.7,
      "boxColor": "#ff9800",
      "destinationCountry": "india",
      "shippingCharge": 69.60
    },
    {
      "id": 1728456789004,
      "receiverName": "Sophie Chen",
      "boxWeight": 15.2,
      "boxColor": "#e91e63",
      "destinationCountry": "china",
      "shippingCharge": 243.20
    }
  ],
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
