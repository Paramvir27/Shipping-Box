import React from 'react';
import styles from '../style.module.css';
import { validateBoxWeight } from '../services/shippingService';

const ShippingChargePreview = ({ 
  destinationCountry, 
  boxWeight, 
  chargePerKg, 
  totalCharge 
}) => {
 
  if (!destinationCountry || !validateBoxWeight(boxWeight)) {
    return null;
  }

  return (
    <div>
      <div className={styles.title}>Shipping Charges</div>
      <div className={styles.value}>
        <span>₹{chargePerKg} × {boxWeight} KG = </span>
        <span>₹{totalCharge}</span>
      </div>
    </div>
  );
};

export default ShippingChargePreview;
