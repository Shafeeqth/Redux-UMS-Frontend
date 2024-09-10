import React, { ReactNode } from 'react'
interface FormGroupProps {
    children: ReactNode[];
}
const FormGroup = ({children}: FormGroupProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default FormGroup