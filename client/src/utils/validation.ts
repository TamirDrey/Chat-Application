import { toast } from "react-toastify";

export const checkPassword = (password: string): boolean => {
  const containNumber = /^(?=.*[0-9])/;
  const containSpecial = /(?=.*[!@#$%^&(),.?":{}|<>])/;
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

export const checkEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const TEST = regex.test(email);

  if (!email) return false;
  if (!TEST) {
    toast.error("Email must be a valid email...");
    return false;
  }
  return true;
};

export const checkName = (name: string): boolean => {
  const nameRegex = /^(?=(?:[^A-Za-z]*[A-Za-z]){3})[A-Za-z]*$/;
  const TEST = nameRegex.test(name);

  if (!name) return false;
  if (!TEST) {
    toast.error("Name must contain at least 3 characters");
    return false;
  }
  return true;
};
