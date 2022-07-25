import React, { useState } from 'react';
import Gender from './components/Gender';
import Terms from './components/Terms';
import TextInput from './components/common/TextInput';
import Transporation from './components/Transporation';
import {
  addressValidation,
  birthdayValidation,
  nameValidation,
  cellularValidation,
  emailValidation,
} from './utils/Validator';
import useInput from './hooks/useInput';

function RegisterPage() {
  const [name, onNameChange] = useInput('');
  const [birthday, onBirthdayChange] = useInput('');
  const [address, onAddressChange] = useInput('');
  const [cellular, onCellularChange] = useInput('');
  const [email, onEmailChange] = useInput('');

  const nameRef = React.useRef<any>(null);
  const birthdayRef = React.useRef<any>(null);
  const addressRef = React.useRef<any>(null);
  const cellularRef = React.useRef<any>(null);
  const emailRef = React.useRef<any>(null);

  const [genderChange, setGenderChange] = React.useState<string | null>(null);

  const [checkName, setCheckName] = React.useState<boolean | null>(null);
  const [checkBirthday, setCheckBirthday] = React.useState<boolean | null>(
    null,
  );
  const [checkAddress, setCheckAddress] = React.useState<boolean | null>(null);
  const [checkCellular, setCheckCellular] = React.useState<boolean | null>(
    null,
  );
  const [checkEmail, setCheckEmail] = React.useState<boolean | null>(null);

  const handleName = (value: string) => {
    setCheckName(nameValidation(value));
  };
  const handleBirthday = (value: string) => {
    setCheckBirthday(birthdayValidation(value));
  };
  const handleAddress = (value: string) => {
    setCheckAddress(addressValidation(value));
  };
  const handleCellular = (value: string) => {
    setCheckCellular(cellularValidation(value));
  };
  const handleEmail = (value: string) => {
    setCheckEmail(emailValidation(value));
  };

  console.log(genderChange);
  return (
    <section className="w-full flex justify-center">
      <article className="max-w-xs px-4 text-blackFont">
        <div className="w-4/5 mt-4">
          <h1 className="text-md font-bold">
            크라우드워커에 지원하기 위해
            <br /> 필요한 정보를 입력해주세요.
          </h1>
        </div>
        <TextInput
          type="text"
          placeHolder="홍길동"
          value={name}
          valid={checkName || name === ''}
          text="이름"
          ref={nameRef}
          onKeyUp={() => {
            handleName(nameRef.current.value);
          }}
          onChange={(event) => onNameChange(event)}
        />
        <Gender genderChange={genderChange} setGenderChange={setGenderChange} />
        <TextInput
          type="number"
          placeHolder="YYYY.MM.DD"
          value={birthday}
          valid={checkBirthday || birthday === ''}
          text="생년월일"
          ref={birthdayRef}
          onKeyUp={() => {
            handleBirthday(birthdayRef.current.value);
          }}
          onChange={(event) => onBirthdayChange(event)}
        />
        <TextInput
          type="text"
          placeHolder="거주지역 선택"
          value={address}
          valid={checkAddress || address === ''}
          text="거주지역"
          ref={addressRef}
          onKeyUp={() => {
            handleAddress(addressRef.current.value);
          }}
          onChange={(event) => onAddressChange(event)}
        />
        <TextInput
          type="number"
          placeHolder="'-'없이 입력해주세요"
          value={cellular}
          valid={checkCellular || cellular === ''}
          text="연락처"
          ref={cellularRef}
          onKeyUp={() => {
            handleCellular(cellularRef.current.value);
          }}
          onChange={(event) => onCellularChange(event)}
        />
        <TextInput
          type="text"
          placeHolder="MYD@snplab.com"
          value={email}
          valid={checkEmail || email === ''}
          text="이메일"
          ref={emailRef}
          onKeyUp={() => {
            handleEmail(emailRef.current.value);
          }}
          onChange={(event) => onEmailChange(event)}
        />
        <Transporation />
        <Terms />
        <div
          className={`flex justify-center w-full h-9 mb-4 rounded-xl 
        ${
          checkName &&
          genderChange !== null &&
          checkBirthday &&
          checkAddress &&
          checkCellular &&
          checkEmail
            ? 'bg-gray-800'
            : 'bg-gray-100'
        } ${checkName ? 'text-gray-400' : 'text-black'} items-center`}
        >
          지원하기
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
