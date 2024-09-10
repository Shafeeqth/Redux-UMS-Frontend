import { useState } from "react";
import { instance as axios, AxiosResponse } from "../services/axios/axios";
import { ISignupCredentails, ILoginCredential } from "@types/auth";

const useAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<object | null>(null);

  const login = async (credential: ILoginCredential) => {
    setLoading(true);
    setError(null);

    try {
      console.log(credential);
   

      const response: AxiosResponse = await axios.post("/login", credential);
      console.log(response);

      return response;
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "Login failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (signupCredential: ISignupCredentails) => {
    setLoading(true);
    setError(null);
    try {
        
      const response = axios.post("/signup", signupCredential);
      
      return response;
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "Signup failed");
      console.error(err);
    } finally {
        setLoading(false)
    }
  };

  return {
    login,
    signup,
    isLoading,
    error
  }
};

export default useAuth;
