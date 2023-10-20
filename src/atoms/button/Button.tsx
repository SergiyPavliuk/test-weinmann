import React, { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  className,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-700 flex items-center justify-center hover:bg-gray-200 transition duration-150 py-2 px-6 ${className}`}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
