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
  /* ############### 거주지역 입력을 위해 추가 ############### */
  const setValueByModal = (inputVal: string) => {
    setValue(inputVal);
  };
  return [value, onChange, onMobileChange, setValueByModal] as const;
}
