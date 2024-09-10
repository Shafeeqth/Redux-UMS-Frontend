import { useCallback, useState } from "react";
import { LoginCredential } from "@types/login";
import useAuth from "@hooks/useAuth";
import LoginForm from "@components/loginForm/LoginForm";
import useDebounce from "@hooks/useDebounce";

const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredential>({
    password: "",
    email: "",
  });
  const { error, isLoading, login } = useAuth();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
    <LoginForm
      credentials={credentials}
      error={error}
      isLoading={isLoading}
      onInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
