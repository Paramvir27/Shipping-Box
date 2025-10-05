import React from 'react';
import { CheckCircle } from 'lucide-react';
import styles from '../style.module.css';

const SuccessNotification = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className={styles.successMessage}>
      <CheckCircle size={20} /> Box added successfully
    </div>
  );
};

export default SuccessNotification;
