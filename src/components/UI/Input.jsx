import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef(({ type, className, ...restProps }, ref) => {
  const style = "bg-gray-200 border border-gray-300 rounded py-2 px-4";
  const classes = className ? style + " " + className : style;

  return <input type={type} className={classes} ref={ref} {...restProps} />;
});

export const PasswordInput = forwardRef(({ className, ...restProps }, ref) => {
  const [showPass, setShowPass] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  return (
    <div className="relative">
      <Input
        className="w-full"
        type={showPass ? "text" : "password"}
        ref={ref}
        {...restProps}
      />
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={togglePasswordVisibility}
        style={{ zIndex: 1 }}
      >
        {showPass ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
});

export const TogglePasswordButton = ({
  togglePasswordVisibility,
  showPass,
}) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 right-4 transform -translate-y-1/2"
      onClick={togglePasswordVisibility}
      style={{ zIndex: 1 }}
    >
      {showPass ? <FiEyeOff /> : <FiEye />}
    </button>
  );
};

export default Input;
