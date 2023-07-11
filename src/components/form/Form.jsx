import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input, { PasswordInput } from "../UI/Input";

const Form = ({
  fields,
  submitButtonText,
  additionalButtons,
  onSubmit,
  title,
}) => {
  const [error, setError] = useState(null);
  const refs = useRef({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const formData = {};

    fields.forEach((field) => {
      const { name } = field;
      formData[name] = refs.current[name].value.trim();
      refs.current[name].value = "";
    });

    if (validateForm(formData)) {
      onSubmit(formData);
    }
  };

  const validateForm = (formData) => {
    for (const key in formData) {
      if (formData[key] === "") {
        setError("Please fill in all fields");
        return false;
      }
    }
    return true;
  };

  return (
    <Card className="w-1/2 mx-auto">
      <h2 className="text-center mb-4">{title}</h2>

      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        {fields.map((field) => {
          const { name, type, placeholder } = field;
          return type === "password" ? (
            <PasswordInput
              key={name}
              placeholder={placeholder}
              ref={(el) => (refs.current[name] = el)}
            />
          ) : (
            <Input
              key={name}
              type={type}
              placeholder={placeholder}
              ref={(el) => (refs.current[name] = el)}
            />
          );
        })}
        <Button type="submit">{submitButtonText}</Button>
        {additionalButtons &&
          additionalButtons.map((button, index) => (
            <Button key={index} type={button.type} onClick={button.onClick}>
              {button.label}
            </Button>
          ))}
      </form>
    </Card>
  );
};

export default Form;
