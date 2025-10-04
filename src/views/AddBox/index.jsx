import React from 'react'
import TextField from '../../components/Input/Text'
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setReceiverName } from '../../store/slices/addBoxSlice';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(receiverName, boxWeight, boxColor, destinationCountry);
  }

  return (
    <div className={styles.parentWrapper}>
      <form onSubmit={handleSubmit}>

        <TextField
          isMandatory={true}
          label="Receiver Name"
          placeholder="Enter Receiver Name"
          value={receiverName}
          onChange={handleReceiverNameChange}
          getValidationMessage={handleReceiverNameValidation}
        />

        <TextField label="Box Color" placeholder="Enter Box Color" />
        <TextField label="Box Weight" placeholder="Enter Box Weight" />

        <button type="submit">Add Box</button>
      </form>
    </div>
  )
}

export default AddBox
