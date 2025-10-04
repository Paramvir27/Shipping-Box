import React from 'react'
import InputText from '../../components/Input/Text'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setBoxWeight, setReceiverName } from '../../store/slices/addBoxSlice';
import InputNumber from '../../components/Input/Number';

const AddBox = () => {
  const dispatch = useDispatch();
  const { receiverName, boxWeight, boxColor, destinationCountry } = useSelector(state => state.addBox);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(receiverName, boxWeight, boxColor, destinationCountry);
    // dispatch(resetAddBox());
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


        <button type="submit">Add Box</button>
      </form>
    </div>
  )
}

export default AddBox
