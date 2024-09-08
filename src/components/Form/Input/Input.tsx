type Props = {
    type: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  };
  
  const Input = ({ type = "text", name, placeholder, value, onChange }: Props) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={ onChange}
      />
    );
  };
  
  export default Input;
  