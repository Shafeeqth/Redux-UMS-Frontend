type Props = {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input = ({
  type = "text",
  name,
  placeholder,
  className,
  value,
  onChange,
  required,
}: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
    />
  );
};

export default Input;
