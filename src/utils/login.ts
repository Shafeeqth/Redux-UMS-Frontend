import { useState } from "react";
import { LoginCredential } from "../@types/loginCredentials";

const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredential>({
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    } catch (error) {}
  };

  return {
    handleChange,
    handleSubmit,
  };
};
