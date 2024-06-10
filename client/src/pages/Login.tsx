import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    if (isEmailValid && isPasswordValid) {
      toast.success("Form submitted successfully!");
      // API request
    }
  };

  const checkPassword = (password: string): boolean => {
    const containNumber = /^(?=.*[0-9])/;
    const containSpecial = /(?=.[!@#$%^&(),.?":{}|<>])/;
    const containLower = /(?=.*[a-z])/;
    const containUpper = /^(?=.*[A-Z])/;

    const TEST =
      containNumber.test(password) &&
      containSpecial.test(password) &&
      containLower.test(password) &&
      containUpper.test(password);

    if (!password) return false;

    if (!TEST) {
      toast.error("Passwords must be a strong password... (eXample@12)");
      return false;
    }
    return true;
  };

  const checkEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const TEST = regex.test(email);

    if (!email) return false;

    if (!TEST) {
      toast.error("Email must be a valid email...");
      return false;
    }
    return true;
  };

  useEffect(() => {
    setIsFormValid(email !== "" && password !== "");
  }, [email, password]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-60">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-4 w-1/2 items-center"
      >
        <input
          className="rounded-md p-4 w-full text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-md p-4 w-full text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white p-4 w-full rounded-md ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
