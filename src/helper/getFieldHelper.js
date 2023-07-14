const getFieldValue = (fields, fieldName, property) => {
  const field = fields.find((field) => field.name === fieldName);
  return field[property];
};

export default getFieldValue;
