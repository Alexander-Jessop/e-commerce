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

export const validateCardholderName = (value) => {
  const cardholderNameRegex = /^[a-zA-Z\s.'-]+$/;
  return cardholderNameRegex.test(value);
};

export const validateCardNumber = (value) => {
  const cardNumberRegex = /^\d{16}$/;
  return cardNumberRegex.test(value);
};

export const validateExpirationDate = (value) => {
  const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  return expirationDateRegex.test(value);
};

export const validateCVC = (value) => {
  const cvcRegex = /^\d{3}$/;
  return cvcRegex.test(value);
};

export const trueValidator = () => {
  return true;
};
