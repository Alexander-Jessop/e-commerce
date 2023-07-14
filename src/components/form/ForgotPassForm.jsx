import { useContext } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { FBCtx } from "../../firebase/FBProvider";
import Form from "./Form";
import { validateEmail } from "../../utils/Validators";
import inputConstructor from "../../helper/useInputConstrutor";
import getFieldValue from "../../helper/getFieldHelper";
import { FBAuthContext } from "../../firebase/FBAuthProvider";

const ForgotPassForm = ({ openForgotForm }) => {
  const { auth } = useContext(FBCtx);
  const { setError } = useContext(FBAuthContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const email = getFieldValue(fields, "email", "value");

    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleShowForgotPassForm = () => {
    setError(null);
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
      className: "min-w-[8rem] max-h-[2.5rem]",
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
