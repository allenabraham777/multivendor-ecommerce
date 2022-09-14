import classnames from "classnames";
import { ChangeEvent } from "react";

interface Props {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  error?: string;
  onChange: (e: ChangeEvent) => void;
}

const Input = ({
  label,
  type,
  placeholder,
  className,
  value,
  error,
  onChange,
}: Props) => {
  return (
    <div className={classnames("flex flex-col space-y-1", className)}>
      <label>{label}</label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className={classnames(
          "border p-2 rounded-md focus:outline-1 focus:outline-blue-400",
          error ? "border-red-600" : ""
        )}
        value={value}
        onChange={onChange}
      />
      <span className="text-red-600 text-xs">{error}</span>
    </div>
  );
};

export default Input;
