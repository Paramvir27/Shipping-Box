import React, { useId } from 'react'

const InputText = ({ label, placeholder, value, getValidationMessage, onChange, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="text" id={id} value={value} onChange={onChange} {...props} />
      <p>{getValidationMessage?.()}</p>
    </div>
  )
}

export default InputText
