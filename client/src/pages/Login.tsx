import { toast } from "react-toastify";
import { useState } from "react";
import { checkEmail, checkPassword } from "../utils/validation";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = (): boolean => {
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);
    return isEmailValid && isPasswordValid;
  };

  const handleLogin = () => {
    toast.success("Form submitted successfully!");
    // API request
  };

  return (
    <AuthForm
      title="Login"
      fields={[
        { label: "Email", type: "email", value: email, setValue: setEmail },
        {
          label: "Password",
          type: "password",
          value: password,
          setValue: setPassword,
        },
      ]}
      validate={validate}
      onSubmit={handleLogin}
    />
  );
};

export default Login;
