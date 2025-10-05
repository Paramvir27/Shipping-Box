import React, { useId } from 'react'
import{Info} from 'lucide-react'

const InputNumber = ({ label, placeholder, value, info, onChange, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>
        <span>{label}</span>
        {info && <i title={info}><Info size={14} /></i>}
      </label>
      <input placeholder={placeholder} type="number" id={id} value={value} onChange={onChange} {...props} />
    </div>
  )
}

export default InputNumber