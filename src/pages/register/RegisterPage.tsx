import React from 'react';
import useToggle from 'hooks/useToggle';
import Modal from 'components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import Gender from './components/Gender';
import Terms from './components/Terms';
import TextInput from './components/common/TextInput';
import Transportation from './components/Transportation';
import {
  addressValidation,
  birthdayValidation,
  nameValidation,
  cellularValidation,
  emailValidation,
} from './utils/Validator';
import useRegisterForm from './hooks/useRegisterForm';

function RegisterPage() {
  // const [onModal, changeModal] = useToggle(false);
  // const [name, onNameChange] = useInput('');
  // const [birthday, onBirthdayChange] = useInput('');
  // const [address, onAddressChange] = useInput('');
  // const [cellular, , onMobileChange] = useInput('');
  // const [email, onEmailChange] = useInput('');
  // const [genderChange, setGenderChange] = React.useState<string | null>(null);
  // const [transportation, settransportation] = React.useState<string[]>([]);

  const [onModal, changeModal] = useToggle();

  const navigate = useNavigate();

  const {
    form,
    onChangeForm,
    onChangeTransportationForm,
    onMobileChange,
    onSubmitMember,
  } = useRegisterForm();

  const nameRef = React.useRef<HTMLInputElement>(null);
  const birthdayRef = React.useRef<HTMLInputElement>(null);
  const addressRef = React.useRef<HTMLInputElement>(null);
  const cellularRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const [checkName, setCheckName] = React.useState<boolean | null>(null);
  const [checkBirthday, setCheckBirthday] = React.useState<boolean | null>(
    null,
  );
  const [checkAddress, setCheckAddress] = React.useState<boolean | null>(null);
  const [checkCellular, setCheckCellular] = React.useState<boolean | null>(
    null,
  );
  const [checkEmail, setCheckEmail] = React.useState<boolean | null>(null);

  const handleName = (value: string | undefined) => {
    if (value === undefined) return;
    setCheckName(nameValidation(value));
  };
  const handleBirthday = (value: string | undefined) => {
    if (value === undefined) return;
    setCheckBirthday(birthdayValidation(value));
  };
  const handleAddress = (value: string | undefined) => {
    if (value === undefined) return;
    setCheckAddress(addressValidation(value));
  };
  const handleCellular = (value: string | undefined) => {
    if (value === undefined) return;
    setCheckCellular(cellularValidation(value));
  };
  const handleEmail = (value: string | undefined) => {
    if (value === undefined) return;
    setCheckEmail(emailValidation(value));
  };

  const { address, birthday, cellular, email, gender, name, transportation } =
    form;

  const disabledCheck =
    checkName &&
    Gender !== null &&
    transportation.length !== 0 &&
    checkBirthday &&
    checkAddress &&
    checkCellular &&
    checkEmail;

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
          name="name"
          placeHolder="홍길동"
          value={name}
          valid={checkName || name === ''}
          text="이름"
          ref={nameRef}
          onKeyUp={() => {
            handleName(nameRef?.current?.value);
          }}
          onChange={onChangeForm}
        />
        <Gender genderChange={gender} onChangeForm={onChangeForm} />
        <TextInput
          type="number"
          name="birthday"
          placeHolder="YYYYMMDD"
          value={birthday}
          valid={checkBirthday || birthday === ''}
          text="생년월일"
          ref={birthdayRef}
          onKeyUp={() => {
            handleBirthday(birthdayRef?.current?.value);
          }}
          onChange={onChangeForm}
        />
        <TextInput
          type="text"
          name="address"
          placeHolder="거주지역 선택"
          value={address}
          valid={checkAddress || address === ''}
          text="거주지역"
          ref={addressRef}
          onKeyUp={() => {
            handleAddress(addressRef?.current?.value);
          }}
          onChange={onChangeForm}
        />
        <TextInput
          type="text"
          name="cellular"
          placeHolder="'-'없이 입력해주세요"
          value={cellular}
          valid={checkCellular || cellular === ''}
          text="연락처"
          ref={cellularRef}
          onKeyUp={() => {
            handleCellular(cellularRef?.current?.value);
          }}
          onChange={onMobileChange}
        />
        <TextInput
          type="text"
          name="email"
          placeHolder="MYD@snplab.com"
          value={email}
          valid={checkEmail || email === ''}
          text="이메일"
          ref={emailRef}
          onKeyUp={() => {
            handleEmail(emailRef?.current?.value);
          }}
          onChange={onChangeForm}
        />
        <Transportation
          transportation={transportation}
          onChangeTransportationForm={onChangeTransportationForm}
        />
        <Terms />
        <button
          className={`flex justify-center w-full h-9 mb-4 rounded-xl 
        ${
          disabledCheck
            ? 'bg-gray-600 text-zinc-50'
            : 'bg-gray-100 text-gray-400'
        }  items-center`}
          type="button"
          onClick={changeModal}
          disabled={!(disabledCheck === true)}
        >
          지원하기
        </button>
        {onModal && (
          <Modal>
            <div className="modalChild flex justify-center w-72 h-20 mx-auto border border-solid border-gray-400 rounded-3xl bg-zinc-50 items-center">
              <div className="absolute left-5 top-6 font-bold">
                지원이 완료되었습니다.
              </div>
              <button
                className="absolute right-6 bottom-4 text-red-500"
                type="button"
                onClick={() => {
                  changeModal();
                  onSubmitMember();
                  navigate('/');
                }}
              >
                확인
              </button>
            </div>
          </Modal>
        )}
      </article>
    </section>
  );
}

export default RegisterPage;
// http 리퀘스트 포스트 실행 =>
// 전달인자 주소, 모은 데이터
// {
//   id: Math.floor(Math.random())*1000,
//   round: "2차",
//   name: name,
//   gender: genderChange,
//   birthday: birthday,
//   address: address,
//   cellular: cellular,
//   email: email,
//   transportation: transportation,
//   win: true
// }
