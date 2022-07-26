import React from 'react';

export default function useInput(initialValue: string | number) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(event.target.value);
  };
  const onMobileChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(event.target.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  };
  return [value, onChange, onMobileChange] as const;
}
