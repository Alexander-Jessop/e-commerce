import Form from "./Form";

const SignInForm = () => {
  const handleFormSubmit = (formData) => {};

  const fields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const onClickHandler = () => {
    console.log("clicked");
  };

  const additionalButtons = [
    {
      label: "Fogot Password?",
      type: "button",
      onClick: onClickHandler,
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
