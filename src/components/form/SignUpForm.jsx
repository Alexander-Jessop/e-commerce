import Form from "./Form";
import {
  validateEmail,
  validatePassword,
  validateTextInput,
  validateConfirmPassword,
} from "../../utils/Validators";
import inputConstructor from "../../helper/useInputConstrutor";

const SignUpForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const onClickHandler = () => {
    console.log("clicked");
  };

  const password = inputConstructor(
    "password",
    "password",
    "Password",
    validatePassword,
    {
      errmsg:
        "Your password should be a minimum of 8 characters long and must include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.",
      className: "w-full",
    }
  );

  const { value } = password;

  const fieldData = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      validateValue: validateTextInput,
      additionalProps: {
        errmsg: "Please enter a valid name (minimum 2 characters)",
        className: "w-full",
      },
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      validateValue: validateTextInput,
      additionalProps: {
        errmsg: "Please enter a valid name (minimum 2 characters)",
        className: "w-full",
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      validateValue: validateEmail,
      additionalProps: {
        errmsg: "Please enter a valid email",
        className: "w-full",
      },
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      validateValue: (confirmPassword) =>
        validateConfirmPassword(confirmPassword, value),
      additionalProps: {
        errmsg: "Password does not match.",
        className: "w-full",
      },
    },
  ];

  const fields = fieldData.map(
    ({ name, type, placeholder, validateValue, additionalProps = {} }) =>
      inputConstructor(name, type, placeholder, validateValue, additionalProps)
  );

  fields.splice(3, 0, password);

  const addtionalButtons = [
    {
      label: "Have an account? Sign In",
      type: "button",
      onClick: onClickHandler,
    },
  ];

  return (
    <Form
      title="Sign Up"
      fields={fields}
      submitButtonText="Submit"
      onSubmit={handleFormSubmit}
      additionalButtons={addtionalButtons}
    />
  );
};

export default SignUpForm;
