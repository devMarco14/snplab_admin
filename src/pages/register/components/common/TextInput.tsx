import React, { forwardRef, MutableRefObject } from 'react';

interface InputProps {
  type: 'text' | 'number';
  value: string | undefined;
  // valid?: boolean | null;
  placeHolder?: string;
  text?: string;
  maxLength?: number;
  onKeyUp: any;
}

// eslint-disable-next-line react/function-component-definition
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div className="my-5">
        <div className="font-bold mb-4">{props.text}</div>
        <input
          type={props.type}
          placeholder={props.placeHolder || ''}
          value={props.value}
          maxLength={props.maxLength}
          ref={ref}
          onKeyUp={props.onKeyUp}
        />
        <div className="w-full mt-2 border-b border-solid border-gray-300" />
      </div>
    );
  },
);

// TextInput = forwardRef<InputProps, PropsType>(TextInput);

export default TextInput;
