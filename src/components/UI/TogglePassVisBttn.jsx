import { FiEye, FiEyeOff } from "react-icons/fi";

const TogglePasswordButton = ({ togglePasswordVisibility, showPass }) => {
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

export default TogglePasswordButton;
