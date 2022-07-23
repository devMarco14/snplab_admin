import React from 'react';

interface InputProps {
  type: 'text' | 'number' | 'tel' | 'password';
  value: string | undefined;
  valid?: boolean | null;
  inputMode?: 'numeric' | 'decimal';
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeHolder?: string;
  text?: string;
  errMessage?: string;
  maxLength?: number;
}

function TextInput({
  type,
  value,
  valid,
  inputMode,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  placeHolder,
  text,
  errMessage,
  maxLength,
}: InputProps) {
  return (
    <div className="my-5">
      <div className="font-bold mb-4">{text}</div>
      <input
        type={type}
        inputMode={inputMode}
        placeholder={placeHolder || ''}
        value={value}
        readOnly={readOnly}
        onChange={(e) => (onChange ? onChange(e.target.value) : null)}
        onFocus={(e) => (onFocus ? onFocus(e.target.value) : null)}
        onBlur={(e) => (onBlur ? onBlur(e.target.value) : null)}
        disabled={disabled}
        maxLength={maxLength}
      />
      <div className="w-full mt-2 border-b border-solid border-gray-300" />
    </div>
  );
}

export default TextInput;
