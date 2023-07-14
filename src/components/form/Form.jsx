import { useContext } from "react";
import Button from "../UI/Button";
import DynamicInput, { PasswordInput } from "../UI/Input";
import { FBAuthContext } from "../../firebase/FBAuthProvider";

const Form = ({
  fields,
  submitButtonText,
  additionalButtons,
  onSubmit,
  title,
}) => {
  const { error: authError } = useContext(FBAuthContext);

  return (
    <form
      className="flex flex-col gap-4 min-w-[20rem] max-w-[35rem]"
      onSubmit={onSubmit}
    >
      <h2 className="text-center mb-1 mt-1 text-lg font-bold">{title}</h2>
      {fields.map((field) => {
        const { key, value, validValue, error, onChange, onBlur, ...rest } =
          field;

        const inputProps = {
          key,
          value,
          onChange,
          onBlur,
          error,
          valid: validValue,
          ...rest,
        };

        return field.type === "password" ? (
          <div key={key}>
            <PasswordInput {...inputProps} />
            {error && <p className="text-red-500">{inputProps.errmsg}</p>}
          </div>
        ) : (
          <div key={key}>
            <DynamicInput {...inputProps} />
            {error && <p className="text-red-500">{inputProps.errmsg}</p>}
          </div>
        );
      })}
      {authError && <p className="text-red-500">{authError}</p>}
      <div className="flex flex-col xxl:flex-row gap-2">
        <Button type="submit" className="min-w-[8rem] max-h-[2.5rem]">
          {submitButtonText}
        </Button>
        {additionalButtons &&
          additionalButtons.map((button, index) => (
            <Button
              key={index}
              type={button.type}
              onClick={button.onClick}
              className={button.className ? button.className : " "}
            >
              {button.label}
            </Button>
          ))}
      </div>
    </form>
  );
};

export default Form;
