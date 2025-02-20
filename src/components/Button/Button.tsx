import { PropsWithChildren } from "react";
import "./Button.css";

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  variant?: "primary" | "secondary" | "link";
  size?: "large" | "medium" | "small";
  isFull?: boolean;
  isDisabled?: boolean;
}>;

function Button({
  children,
  onClick,
  variant = "primary",
  size = "large",
  isFull = false,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled}
      className={`${variant} ${size}${isFull ? " full" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
