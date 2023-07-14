import { useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { FBCtx } from "../../firebase/FBProvider";
import Form from "./Form";
import { validateEmail } from "../../utils/Validators";
import inputConstructor from "../../helper/useInputConstrutor";
import getFieldValue from "../../helper/getFieldHelper";

const ForgotPassForm = ({ openForgotForm }) => {
  const { auth } = useContext(FBCtx);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const emailValid = getFieldValue(fields, "email", "error");

    if (emailValid) {
      throw new Error("Invalid form");
    }

    const email = getFieldValue(fields, "email", "value");

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log("err", err);
    }
  };

  const toggleShowForgotPassForm = () => {
    openForgotForm();
  };

  const fildData = [
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
  ];

  const addtionalButtons = [
    {
      label: "Sign In",
      type: "button",
      onClick: toggleShowForgotPassForm,
    },
  ];

  const fields = fildData.map(
    ({ name, type, placeholder, validateValue, additionalProps }) =>
      inputConstructor(name, type, placeholder, validateValue, additionalProps)
  );

  return (
    <Form
      title="Reset Password"
      fields={fields}
      submitButtonText="Send Reset Email"
      additionalButtons={addtionalButtons}
      onSubmit={handleFormSubmit}
    />
  );
};

export default ForgotPassForm;
