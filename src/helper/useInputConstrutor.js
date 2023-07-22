import useInput from "../hooks/UseInput";

const inputConstructor = (
  name,
  type,
  placeholder,
  validateValue,
  additionalProps = {},
  value = null
) => {
  const {
    inputValue,
    validValue,
    error,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput(validateValue);

  return {
    name,
    type,
    placeholder,
    key: name,
    value: value || inputValue,
    validValue,
    error,
    onChange: inputChangeHandler,
    onBlur: inputBlurHandler,
    reset,
    ...additionalProps,
  };
};

export default inputConstructor;
