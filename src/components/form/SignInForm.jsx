import { useContext } from "react";

import { FBAuthContext } from "../../firebase/FBAuthProvider";
import Form from "./Form";
import { validateEmail } from "../../utils/Validators";
import inputConstructor from "../../helper/useInputConstrutor";
import getFieldValue from "../../helper/getFieldHelper";

const SignInForm = ({ switchForm, openForgotForm }) => {
  const { login } = useContext(FBAuthContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const emailValid = getFieldValue(fields, "email", "error");

    if (emailValid) {
      throw new Error("Invalid form");
    }

    const email = getFieldValue(fields, "email", "value");
    const password = getFieldValue(fields, "password", "value");

    try {
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const openForgotPassForm = () => {
    openForgotForm();
  };

  const nullValidator = () => {
    return true;
  };

  const fieldData = [
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
      name: "password",
      type: "password",
      placeholder: "Password",
      validateValue: nullValidator,
      additionalProps: {
        errmsg:
          "Password is invalid. Forgotten your password? Click button below",
        className: "w-full",
      },
    },
  ];

  const additionalButtons = [
    {
      label: "Forgot Password?",
      type: "button",
      onClick: openForgotPassForm,
    },
    {
      label: "Register Account",
      type: "button",
      onClick: switchForm,
    },
  ];

  const fields = fieldData.map(
    ({ name, type, placeholder, validateValue, additionalProps }) =>
      inputConstructor(name, type, placeholder, validateValue, additionalProps)
  );

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
