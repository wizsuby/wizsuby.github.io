import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const CTAButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className=" 
      flex 
      items-center
      relative 
      lg:w-full
      outline-none 
      font-medium 
      "
    >
      <div className="inset-0 absolute bg-gradient-to-b animate-pulse from-amber-400 via-rose-600  to-fuchsia-700 rounded-lg blur-md"></div>
      <div
        className="
        relative 
        flex 
        space-x-2 
        px-6 
        py-2
        text-sm
        text-white 
        lg:w-full
        lg: justify-center
        bg-neutral-900
        rounded-lg 
        "
      >
        {children}
      </div>
    </button>
  );
};

export default CTAButton;
