import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setReceiverName,
  setBoxWeight,
  setBoxColor,
  setDestinationCountry,
  resetAddBox,
} from '../../../store/slices/addBoxSlice';
import { addShippingBox } from '../../../store/slices/boxListingSlice';
import { createShippingBox } from '../services/shippingService';
import { SUCCESS_MESSAGE_DURATION, FORM_FIELDS } from '../constants';

export const useAddBoxForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.addBox);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    switch (fieldName) {
      case FORM_FIELDS.RECEIVER_NAME:
        dispatch(setReceiverName(value));
        break;
      case FORM_FIELDS.BOX_WEIGHT:
        dispatch(setBoxWeight(Number(value)));
        break;
      case FORM_FIELDS.BOX_COLOR:
        dispatch(setBoxColor(value));
        break;
      case FORM_FIELDS.DESTINATION_COUNTRY:
        dispatch(setDestinationCountry(value));
        break;
      default:
        console.warn(`Unknown field: ${fieldName}`);
    }
  };

  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, SUCCESS_MESSAGE_DURATION);
  };

  const handleSubmit = (event, shippingCharge) => {
    event.preventDefault();
    
    const shippingBox = createShippingBox(formData, shippingCharge);
    dispatch(addShippingBox(shippingBox));
    dispatch(resetAddBox());
    showSuccessMessage();
  };

  return {
    formData,
    showSuccess,
    handleFieldChange,
    handleSubmit,
  };
};
