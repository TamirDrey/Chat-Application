import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      className="rounded-md p-4 w-full"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
