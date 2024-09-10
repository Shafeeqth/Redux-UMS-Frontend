import React, { ReactNode } from 'react'
interface FormGroupProps {
    label: ReactNode;
    input: ReactNode;
}
const FormGroup = ({label, input}: FormGroupProps) => {
  return (
    <div>
        {label}
        {input}
    </div>
  )
}

export default FormGroup