import { useId } from 'react';
import "./TextInput.css";

interface PrimaryInputProps {
  label: string;
  isFull?: boolean;
}

function TextInput({
  label,
  isFull = false,
}: PrimaryInputProps) {
  const inputId = useId();

  return (
    <div className="container">
      <input
        id={inputId}
        className={isFull ? "full" : ""}
        placeholder=" "
        type="text"
      />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default TextInput;
