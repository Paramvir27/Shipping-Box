import React from 'react';
import styles from './style.module.css';
import SuccessNotification from './components/SuccessNotification';
import AddBoxForm from './components/AddBoxForm';
import { useAddBoxForm } from '../../hooks/useAddBoxForm';
import { calculateShippingCharge, getChargePerKg } from '../../services/shippingService';
import shippingCharges from '../../fixtures/shippingCharges.json';

const AddBox = () => {
  const {
    formData,
    showSuccess,
    handleFieldChange,
    handleSubmit,
  } = useAddBoxForm();

  const chargePerKg = getChargePerKg(formData.destinationCountry, shippingCharges);
  const shippingCharge = calculateShippingCharge(formData.boxWeight, formData.destinationCountry, shippingCharges);

  const onFormSubmit = (event) => {
    handleSubmit(event, shippingCharge);
  };

  return (
    <div className={styles.parentWrapper}>
      <SuccessNotification show={showSuccess} />

      <AddBoxForm
        formData={formData}
        shippingCharge={shippingCharge}
        chargePerKg={chargePerKg}
        onFieldChange={handleFieldChange}
        onSubmit={onFormSubmit}
      />
    </div>
  );
};

export default AddBox;