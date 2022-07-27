/* eslint-disable react/jsx-curly-brace-presence */
import React, { MutableRefObject } from 'react';

interface InputProps {
  type: 'text' | 'number';
  value: string | number;
  valid?: boolean | null;
  placeHolder?: string;
  text?: string;
  name?: string;
  maxLength?: number;
  onKeyUp?: () => void;
  onFocus?: (event: React.FocusEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}
// props.name 추가
// eslint-disable-next-line react/function-component-definition
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className="my-5">
        <div className="font-bold mb-4">{props.text}</div>
        <input
          className={`w-full border-b border-solid 
          ${props.valid ? 'border-gray-300' : 'border-red-400'} pb-1`}
          type={props.type}
          placeholder={props.placeHolder || ''}
          value={props.value}
          maxLength={props.maxLength}
          ref={ref}
          name={props.name}
          onKeyUp={props.onKeyUp}
          onFocus={props.onFocus}
          onChange={(event) => props.onChange(event)}
          readOnly={props.readOnly}
        />
      </div>
    );
  },
);

// TextInput = forwardRef<InputProps, PropsType>(TextInput);

export default TextInput;
