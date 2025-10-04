import React, { useId } from 'react'

const InputColor = ({ label, placeholder, value, getValidationMessage, onChange, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="color" id={id} value={value} onChange={onChange} {...props} />
      <p>{getValidationMessage?.()}</p>
    </div>
  )
}

export default InputColor
