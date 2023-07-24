export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const invalidDate = date.getDate().toString().includes("NaN");

  return invalidDate
    ? "Invalid date"
    : `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
};
