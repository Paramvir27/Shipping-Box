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
  const shippingCharge = Number((destinationChargePerKg * boxWeight).toFixed(2));

  const handleReceiverNameChange = (event) => {
    dispatch(setReceiverName(event.target.value))
  }



  const handleBoxWeightChange = (event) => {
    dispatch(setBoxWeight(Number(event.target.value)))
  }



  const handleBoxColorChange = (event) => {
    dispatch(setBoxColor(event.target.value))
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
        />

        <div className={styles.rowContainer}>
          <InputNumber
            required={true}
            info="Negative values are not permitted. Box Weight must be between 0.1 and 100 KG"
            label="Box Weight (KG)"
            placeholder="Enter Box Weight"
            value={boxWeight}
            min="0.1" max="100"
            step="0.1"
            onChange={handleBoxWeightChange}
          />

          <InputColor
            required={true}
            label="Box Color"
            placeholder="Enter Box Color"
            value={boxColor}
            onChange={handleBoxColorChange}
          />
        </div>

        <InputSelect
          required={true}
          placeholder="Select Country"
          label="Destination Country"
          value={destinationCountry}
          onChange={handleDestinationCountryChange}
          options={destinationCountries}
        />

        {destinationCountry && (boxWeight <= 100 && boxWeight >= 0.1) && (
          <div>
            <div className={styles.title}>Shipping Charges</div>
            <div className={styles.value}>
              <span>₹{destinationChargePerKg} × {boxWeight} KG = </span>
              <span>₹{shippingCharge}</span>
            </div>
          </div>
        )}


        <button type="submit">Add Box</button>
      </form>
    </div>
  )
}

export default AddBox
