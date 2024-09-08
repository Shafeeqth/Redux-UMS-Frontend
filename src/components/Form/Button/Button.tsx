import { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
};

const Button = ({ type = "button", className, children, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={ onClick}
      className= {className}
    >
        {children}
    </button>
  );
};

export default Button;
