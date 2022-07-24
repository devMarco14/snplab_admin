import React from 'react';

export default function useInput(initialValue: string | number) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValue(event.target.value);
  };

  return [value, onChange] as const;
}
