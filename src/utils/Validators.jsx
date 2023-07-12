export const validatePassword = (value) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_'])[\w@$!%*?&']{8,}$/;
  return passwordRegex.test(value);
};

export const validateTextInput = (value) => {
  const hasNumbers = /\d/.test(value);
  return value.length > 1 && value.trim() !== "" && !hasNumbers;
};

export const validateEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

export const validateConfirmPassword = (value, password) => {
  return value === password;
};
