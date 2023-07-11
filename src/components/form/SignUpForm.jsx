import Form from "./Form";

const SignUpForm = () => {
  const handleFormSubmit = (formData) => {};

  const fields = [
    { name: "userName", type: "text", placeholder: "User Name" },
    { name: "firstName", type: "text", placeholder: "First Name" },
    { name: "lastName", type: "text", placeholder: "Last Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const onClickHandler = () => {
    console.log("clicked");
  };

  const addtionalButtons = [
    {
      label: "Already have an account? Sign In",
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
