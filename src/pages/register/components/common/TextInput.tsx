/* eslint-disable react/jsx-curly-brace-presence */
import React, { forwardRef, MutableRefObject } from 'react';

interface InputProps {
  type: 'text' | 'number';
  value: string | number;
  valid?: boolean | null;
  placeHolder?: string;
  text?: string;
  maxLength?: number;
  onKeyUp: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
          onKeyUp={props.onKeyUp}
          onChange={(event) => props.onChange(event)}
        />
      </div>
    );
  },
);

// TextInput = forwardRef<InputProps, PropsType>(TextInput);

export default TextInput;
