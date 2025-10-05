import React, { useId } from 'react'

const InputText = ({ label, placeholder, value, onChange, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="text" id={id} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default InputText
