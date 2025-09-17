"use client";
import { useState } from "react";

type InputProps = {
  label: string;
  type: string;
  className: string;
  placeholder: string;
};

export default function Input({
  label,
  type,
  className,
  placeholder,
}: InputProps) {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col gap-[0.25rem]">
      <label htmlFor={label} className="text-[0.875rem]">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className={className}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
