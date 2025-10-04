import React from 'react'
import InputText from '../../components/Input/Text'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { resetAddBox, setBoxColor, setBoxWeight, setDestinationCountry, setReceiverName } from '../../store/slices/addBoxSlice';
import InputNumber from '../../components/Input/Number';
import InputColor from '../../components/Input/Color';
import destinationCountries from '../../fixtures/countries.json';
import shippingCharges from '../../fixtures/shippingCharges.json';
import InputSelect from '../../components/Input/Select';
import { addShippingBox } from '../../store/slices/boxListingSlice';

const AddBox = () => {
  const dispatch = useDispatch();
  const { receiverName, boxWeight, boxColor, destinationCountry } = useSelector(state => state.addBox);

  const destinationChargePerKg = shippingCharges[destinationCountry];
  const shippingCharge = destinationChargePerKg * boxWeight;

  const handleReceiverNameChange = (event) => {
    dispatch(setReceiverName(event.target.value))
  }

  const handleReceiverNameValidation = () => {
    if (receiverName.length === 0) {
      return "Receiver Name is required"
    }
    return null
  }

  const handleBoxWeightChange = (event) => {
    dispatch(setBoxWeight(Number(event.target.value)))
  }

  const handleBoxWeightValidation = () => {
    if (boxWeight < 0) {
      return "Box Weight is required"
    }
    return null
  }

  const handleBoxColorChange = (event) => {
    dispatch(setBoxColor(event.target.value))
  }

  const handleBoxColorValidation = () => {
    if (boxColor.length === 0) {
      return "Box Color is required"
    }
    return null
  }

  const handleDestinationCountryChange = (event) => {
    dispatch(setDestinationCountry(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const shippingBox = {
      id,
      receiverName,
      boxWeight,
      boxColor,
      destinationCountry,
      shippingCharge,
    };
    dispatch(addShippingBox(shippingBox));
    dispatch(resetAddBox());
    console.log(receiverName, boxWeight, boxColor, destinationCountry);
  }

  return (
    <div className={styles.parentWrapper}>
      <form onSubmit={handleSubmit}>

        <InputText
          required={true}
          label="Receiver Name"
          placeholder="Enter Receiver Name"
          value={receiverName}
          onChange={handleReceiverNameChange}
          getValidationMessage={handleReceiverNameValidation}
        />

        <InputNumber
          required={true}
          label="Box Weight"
          placeholder="Enter Box Weight"
          value={boxWeight}
          min="0.1" max="100"
          step="0.1"
          onChange={handleBoxWeightChange}
          getValidationMessage={handleBoxWeightValidation}
        />

        <InputColor
          required={true}
          label="Box Color"
          placeholder="Enter Box Color"
          value={boxColor}
          onChange={handleBoxColorChange}
          getValidationMessage={handleBoxColorValidation}
        />

        <InputSelect
          required={true}
          placeholder="Select Country"
          label="Destination Country"
          value={destinationCountry}
          onChange={handleDestinationCountryChange}
          options={destinationCountries}
        />

        {destinationCountry && (
          <div>
            <p>Shipping Charge: {shippingCharge}</p>
          </div>
        )}


        <button type="submit">Add Box</button>
      </form>
    </div>
  )
}

export default AddBox
