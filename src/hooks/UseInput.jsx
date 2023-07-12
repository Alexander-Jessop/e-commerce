import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const validValue = validateValue(inputValue);
  const error = !validValue && touched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setTouched(false);
  };

  return {
    inputValue,
    validValue,
    error,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
