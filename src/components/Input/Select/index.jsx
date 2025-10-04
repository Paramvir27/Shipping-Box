import React, { useId } from 'react'

const InputSelect = ({ label, value, onChange, options, getValidationMessage, placeholder, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <p>{getValidationMessage?.()}</p>
    </div>
  )
}

export default InputSelect
