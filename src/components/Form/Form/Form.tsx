import React, { ReactNode } from "react";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className: string;
};

const Form = ({ onSubmit, className, children }: Props) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
