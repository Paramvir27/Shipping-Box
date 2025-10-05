import React from 'react';
import InputText from '../../../components/Input/Text';
import InputNumber from '../../../components/Input/Number';
import InputColor from '../../../components/Input/Color';
import InputSelect from '../../../components/Input/Select';
import ShippingChargePreview from './ShippingChargePreview';
import destinationCountries from '../../../fixtures/countries.json';
import styles from '../style.module.css';
import {
  BOX_WEIGHT_CONSTRAINTS,
  FORM_FIELDS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  VALIDATION_MESSAGES,
} from '../constants';

const AddBoxForm = ({
  formData,
  shippingCharge,
  chargePerKg,
  onFieldChange,
  onSubmit,
}) => {
  
  const handleReceiverNameChange = (event) => {
    onFieldChange(FORM_FIELDS.RECEIVER_NAME, event.target.value);
  };

  const handleBoxWeightChange = (event) => {
    onFieldChange(FORM_FIELDS.BOX_WEIGHT, event.target.value);
  };

  const handleBoxColorChange = (event) => {
    onFieldChange(FORM_FIELDS.BOX_COLOR, event.target.value);
  };

  const handleDestinationCountryChange = (event) => {
    onFieldChange(FORM_FIELDS.DESTINATION_COUNTRY, event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputText
        required={true}
        label={FORM_LABELS.RECEIVER_NAME}
        placeholder={FORM_PLACEHOLDERS.RECEIVER_NAME}
        value={formData.receiverName}
        onChange={handleReceiverNameChange}
      />

      <div className={styles.rowContainer}>
        <InputNumber
          required={true}
          info={VALIDATION_MESSAGES.BOX_WEIGHT}
          label={FORM_LABELS.BOX_WEIGHT}
          placeholder={FORM_PLACEHOLDERS.BOX_WEIGHT}
          value={formData.boxWeight}
          min={BOX_WEIGHT_CONSTRAINTS.MIN}
          max={BOX_WEIGHT_CONSTRAINTS.MAX}
          step={BOX_WEIGHT_CONSTRAINTS.STEP}
          onChange={handleBoxWeightChange}
        />

        <InputColor
          required={true}
          label={FORM_LABELS.BOX_COLOR}
          placeholder={FORM_PLACEHOLDERS.BOX_COLOR}
          value={formData.boxColor}
          onChange={handleBoxColorChange}
        />
      </div>

      <InputSelect
        required={true}
        placeholder={FORM_PLACEHOLDERS.DESTINATION_COUNTRY}
        label={FORM_LABELS.DESTINATION_COUNTRY}
        value={formData.destinationCountry}
        onChange={handleDestinationCountryChange}
        options={destinationCountries}
      />

      <ShippingChargePreview
        destinationCountry={formData.destinationCountry}
        boxWeight={formData.boxWeight}
        chargePerKg={chargePerKg}
        totalCharge={shippingCharge}
      />

      <button type="submit">Add Box</button>
    </form>
  );
};

export default AddBoxForm;
