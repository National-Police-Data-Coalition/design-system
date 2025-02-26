import { useId } from "react";
import "./TextInput.css";

interface PrimaryInputProps {
  label: string;
  type?: "text" | "password";
  isFull?: boolean;
}

function TextInput({
  label,
  type = "text",
  isFull = false,
}: PrimaryInputProps) {
  const inputId = useId();

  return (
    <div className="container">
      <input
        id={inputId}
        className={isFull ? "full" : ""}
        placeholder=" "
        type={type}
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default TextInput;
