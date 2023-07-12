import Card from "../UI/Card";
import Button from "../UI/Button";
import DynamicInput, { PasswordInput } from "../UI/Input";

const Form = ({
  fields,
  submitButtonText,
  additionalButtons,
  onSubmit,
  title,
}) => {
  return (
    <Card className="w-1/3 min-w-[20rem] mx-auto">
      <h2 className="text-center mb-4 text-lg font-bold">{title}</h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
        <div className="flex flex-col xl:flex-row gap-2">
          <Button type="submit" className="flex-1">
            {submitButtonText}
          </Button>
          {additionalButtons &&
            additionalButtons.map((button, index) => (
              <Button
                key={index}
                type={button.type}
                onClick={button.onClick}
                className="flex-1"
              >
                {button.label}
              </Button>
            ))}
        </div>
      </form>
    </Card>
  );
};

export default Form;
