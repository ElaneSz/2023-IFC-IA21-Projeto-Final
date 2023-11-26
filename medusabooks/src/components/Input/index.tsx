import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
  return (
    <input
      className="border-b-2 border-purple-500 focus:border-purple-100  transition-all duration-300 h-9 rounded-md outline-none px-3 mb-3 shadow-md focus:shadow-lg"
      {...props}
    />
  );
}
