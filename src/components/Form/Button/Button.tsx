type Props = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const Button = ({ type = "button", label, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={ onClick}
    >
        {label}
    </button>
  );
};

export default Button;
