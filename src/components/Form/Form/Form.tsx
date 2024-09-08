import React, { ReactNode } from 'react'

type Props = {
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode
}

const Form = ({onSubmit, children}: Props) => {
  return (
    <form onSubmit={onSubmit}>{children}</form>
  )
}

export default Form