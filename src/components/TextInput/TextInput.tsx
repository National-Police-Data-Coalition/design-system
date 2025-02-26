import { useId } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./TextInput.css";

interface PrimaryInputProps {
  label: string;
  errorText?: string;
  helpText?: string;
  type?: "text" | "password";
  isFull?: boolean;
}

function TextInput({
  label,
  errorText,
  helpText,
  type = "text",
  isFull = false,
}: PrimaryInputProps) {
  const inputId = useId();
  const helpId = useId();
  const errorId = useId();
  const descriptors = `${helpText ? helpId : ""} ${errorText ? errorId : ""}`;

  return (
    <>
      <div className="container">
        <input
          id={inputId}
          aria-describedby={descriptors}
          aria-invalid={!!errorText}
          className={isFull ? "full" : ""}
          placeholder=" "
          type={type}
        />
        <label htmlFor={inputId}>{label}</label>
      </div>
      {errorText && (
        <span id={errorId} className="error">
          <ErrorIcon fontSize="small" aria-hidden="true" />&nbsp;
          {errorText}
        </span>
      )}
      {helpText && (
        <span id={helpId} className="help">
          {helpText}
        </span>
      )}
    </>
  );
}

export default TextInput;
