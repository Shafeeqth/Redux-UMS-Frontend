import { ReactNode } from "react";

type Props = {
  htmlFor: string;
  className: string;
  children: ReactNode;
};

const Label = ({ htmlFor, children, className }: Props) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
