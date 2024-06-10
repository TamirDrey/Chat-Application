import { toast } from "react-toastify";
import { useState } from "react";
import { checkEmail, checkPassword, checkName } from "../utils/validation";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = (): boolean => {
    const isNameValid = checkName(name);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);
    return isNameValid && isEmailValid && isPasswordValid;
  };

  const handleRegister = () => {
    toast.success("Form submitted successfully!");
    // API request
  };

  return (
    <AuthForm
      title="Register"
      fields={[
        { label: "Name", type: "text", value: name, setValue: setName },
        { label: "Email", type: "email", value: email, setValue: setEmail },
        {
          label: "Password",
          type: "password",
          value: password,
          setValue: setPassword,
        },
      ]}
      validate={validate}
      onSubmit={handleRegister}
    />
  );
};

export default Register;
