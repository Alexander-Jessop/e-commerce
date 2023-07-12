import { useState } from "react";
import TogglePasswordButton from "./TogglePassVisBttn";

const DynamicInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => {
  const baseStyle = "bg-gray-200 border border-gray-300 rounded py-2 px-4";
  const errorStyle =
    "border-red-500 bg-red-100 focus:ring-red-500 focus:border-red-500";
  const classes = className ? `${baseStyle} ${className}` : baseStyle;
  const inputClasses = error ? `${classes} ${errorStyle}` : classes;

  return (
    <input
      {...{ name, type, placeholder, value, onChange, onBlur }}
      className={inputClasses}
    />
  );
};

export const PasswordInput = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  className,
}) => {
  const [showPass, setShowPass] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const inputToggle = showPass ? "text" : "password";

  return (
    <div className="relative">
      <DynamicInput
        {...{
          name,
          placeholder,
          value,
          onChange,
          onBlur,
          error,
          className,
        }}
        type={inputToggle}
      />
      <TogglePasswordButton
        togglePasswordVisibility={togglePasswordVisibility}
        showPass={showPass}
      />
    </div>
  );
};

export default DynamicInput;
