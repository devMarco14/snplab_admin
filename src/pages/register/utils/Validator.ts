export const nameValidation = (value: string) => {
  const checkName = /^[가-힣]+$/;
  return checkName.test(value);
};

export const birthdayValidation = (value: string) => {
  const checkBirthdayRef =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return checkBirthdayRef.test(value);
};

export const addressValidation = (value: string) => {
  const checkAddressRef = /^[가-힣\s]+$/;
  return checkAddressRef.test(value);
};

export const cellularValidation = (value: string) => {
  const checkCellularRef = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/;
  return checkCellularRef.test(value);
};

export const emailValidation = (value: string) => {
  const checkEmailRef =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[com]{3}$/i;
  return checkEmailRef.test(value);
};
