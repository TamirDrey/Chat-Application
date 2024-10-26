import { toast } from "react-toastify";
import { useState } from "react";
import { checkEmail, checkPassword } from "../utils/validation";
import AuthForm from "../components/AuthForm";
import { useLoginMutation } from "../store/services/auth-api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);
    return isEmailValid && isPasswordValid;
  };

  const handleLogin = async () => {
    toast.success("Form submitted successfully!");
    await login({
      email: email,
      password: password,
    }).then(() => {
      navigate("/");
    });
    
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
