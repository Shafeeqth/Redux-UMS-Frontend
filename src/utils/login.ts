import { useState } from "react";

type Credential = {
    email : string;
    password: string
}

const Login = () => {
    const [credentials, setCredentials] = useState<Credential>({password: '', email: ''});
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            
        } catch (error) {
            
        }
    }

    return {
        handleChange,
        handleSubmit
    }

}