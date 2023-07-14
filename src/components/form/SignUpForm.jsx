import { useContext } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FBAuthContext } from "../../firebase/FBAuthProvider";
import { FBCtx } from "../../firebase/FBProvider";

import Form from "./Form";
import {
  validateEmail,
  validatePassword,
  validateTextInput,
  validateConfirmPassword,
} from "../../utils/Validators";
import inputConstructor from "../../helper/useInputConstrutor";
import getFieldValue from "../../helper/getFieldHelper";

const SignUpForm = ({ switchForm }) => {
  const { auth } = useContext(FBCtx);
  const { login, setUserData } = useContext(FBAuthContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const fNameValid = getFieldValue(fields, "firstName", "error");
    console.log("fNameValid", fNameValid);
    const lNameValid = getFieldValue(fields, "lastName", "error");
    const emailValid = getFieldValue(fields, "email", "error");
    const passwordValid = getFieldValue(fields, "password", "error");
    const confirmPasswordValid = getFieldValue(
      fields,
      "confirmPassword",
      "error"
    );

    if (
      fNameValid ||
      lNameValid ||
      emailValid ||
      passwordValid ||
      confirmPasswordValid
    ) {
      throw new Error("Invalid form");
    }

    const firstName = getFieldValue(fields, "firstName", "value");
    const lastName = getFieldValue(fields, "lastName", "value");
    const email = getFieldValue(fields, "email", "value");
    const password = getFieldValue(fields, "password", "value");

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const userData = {
        firstName,
        lastName,
        email,
      };

      await setUserData(auth.currentUser, userData);

      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const navigateHandler = () => {
    switchForm();
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
      onClick: navigateHandler,
    },
  ];

  return (
    <Form
      title="Register an Account"
      fields={fields}
      submitButtonText="Submit"
      onSubmit={handleFormSubmit}
      additionalButtons={addtionalButtons}
    />
  );
};

export default SignUpForm;
