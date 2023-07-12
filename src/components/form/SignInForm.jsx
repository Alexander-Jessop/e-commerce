import Form from "./Form";
import useInput from "../../hooks/UseInput";
import { validateEmail, validatePassword } from "../../utils/Validators";
//validatePassword is not needed for sign in but current place holder

const SignInForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // sign in with firebase
    resetEmail();
    resetPassword();
  };

  const onClickHandler = () => {
    console.log("clicked");
  };

  const {
    inputValue: email,
    validValue: isEmailValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  const {
    inputValue: password,
    validValue: isPasswordValid,
    error: passwordError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validatePassword);

  const additionalButtons = [
    {
      label: "Forgot Password?",
      type: "button",
      onClick: onClickHandler,
    },
  ];

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      key: "email",
      value: email,
      validValue: isEmailValid,
      error: emailError,
      errmsg: "Please enter a valid email",
      onChange: emailChangeHandler,
      onBlur: emailBlurHandler,
      reset: resetEmail,
      className: "w-full",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      key: "password",
      value: password,
      validValue: isPasswordValid,
      error: passwordError,
      errmsg:
        "Password is invalid. Forgotten your password? Click button below",
      onChange: passwordChangeHandler,
      onBlur: passwordBlurHandler,
      reset: resetPassword,
      className: "w-full",
    },
  ];

  return (
    <Form
      title="Sign In"
      fields={fields}
      submitButtonText="Submit"
      additionalButtons={additionalButtons}
      onSubmit={handleFormSubmit}
    />
  );
};

export default SignInForm;
