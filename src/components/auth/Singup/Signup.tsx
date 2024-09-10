import { useCallback, useState } from "react";
import { ISignupCredentails } from "@types/auth";
import useAuth from "@hooks/useAuth";
import useDebounce from "@hooks/useDebounce";
import SignupForm from "@components/SignupForm/SignupForm";

const Login = () => {
  const [credentials, setCredentials] = useState<ISignupCredentails>({
    password: "",
    email: "",
    confirmPassword:'',
    name: '',
    phone: ''

  });
  const { error, isLoading, signup } = useAuth();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    
    setCredentials((credentials) => ({ ...credentials, [e.target.name]: e.target.value }));
  },[]);

  

  const debounceCredentials = {
    email: useDebounce(credentials.email, 300),
    password: useDebounce(credentials.password, 300)

  }

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //it will validate and submit the form inputs
    let response = await login(debounceCredentials);
  }, [credentials, login]);

  return (
    <SignupForm
      credentials={credentials}
      error={error}
      isLoading={isLoading}
      onInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
