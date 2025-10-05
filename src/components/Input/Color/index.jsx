import React, { useId } from 'react'

const InputColor = ({ label, placeholder, value, onChange, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="color" id={id} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default InputColor
