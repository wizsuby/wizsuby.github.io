import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className="
      text-sm 
      inline-flex 
      space-x-2 
      items-center 
      px-6 
      py-1.5
      text-neutral-700 
      rounded-lg 
      outline-none 
      font-medium 
      border"
    >
      {children}
    </button>
  );
};

export default Button;
