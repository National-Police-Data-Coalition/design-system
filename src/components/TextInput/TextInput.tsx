import { useId } from "react";
import "./TextInput.css";

interface PrimaryInputProps {
  label: string;
  helpText?: string;
  type?: "text" | "password";
  isFull?: boolean;
}

function TextInput({
  label,
  helpText,
  type = "text",
  isFull = false,
}: PrimaryInputProps) {
  const inputId = useId();
  const helpId = useId();
  const descriptors = `${helpText ? helpId : ''}`

  return (
    <>
      <div className="container">
        <input
          id={inputId}
          aria-describedby={descriptors}
          className={isFull ? "full" : ""}
          placeholder=" "
          type={type}
        />
        <label htmlFor={inputId}>{label}</label>
      </div>
      {helpText && (
        <span id={helpId} className="help">
          {helpText}
        </span>
      )}
    </>
  );
}

export default TextInput;
