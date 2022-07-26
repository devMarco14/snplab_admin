import React from 'react';
import { StringIndexedObjects } from 'types/interfaces';
import Modal from 'components/modal/Modal';
import Gender from './components/Gender';
import Terms from './components/Terms';
import TextInput from './components/common/TextInput';
import Tranportation from './components/Tranportation';
import {
  addressValidation,
  birthdayValidation,
  nameValidation,
  cellularValidation,
  emailValidation,
} from './utils/Validator';
import useInput from './hooks/useInput';
import SelectRegion from './components/region/SelectRegion';
import TermsDetail from './components/terms/TermsDetail';

function RegisterPage() {
  const [name, onNameChange] = useInput('');
  const [birthday, onBirthdayChange] = useInput('');
  /* ############### 수정 내용: 사용 함수 추가 및 수정 ############### */
  const [address, , , setValueByModal] = useInput('');
  /* ############################################# */
  const [cellular, , onMobileChange] = useInput('');
  const [email, onEmailChange] = useInput('');

  /* ############### 수정 내용: ref 타입 정의 ############### */
  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const birthdayRef = React.useRef<HTMLInputElement | null>(null);
  const addressRef = React.useRef<HTMLInputElement | null>(null);
  const cellularRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  /* ############################################# */

  const [genderChange, setGenderChange] = React.useState<string | null>(null);
  const [tranportation, setTranportation] = React.useState<string[]>([]);
  const [checkName, setCheckName] = React.useState<boolean | null>(null);
  const [checkBirthday, setCheckBirthday] = React.useState<boolean | null>(
    null,
  );
  const [checkAddress, setCheckAddress] = React.useState<boolean | null>(null);
  const [checkCellular, setCheckCellular] = React.useState<boolean | null>(
    null,
  );
  const [checkEmail, setCheckEmail] = React.useState<boolean | null>(null);
  /* ############### 수정 내용: state 추가 ############### */
  const [termsContents, setTermsContents] = React.useState('');
  const [windowScrollLocation, setScrollLocation] = React.useState<number>(0);
  const [areTermsChecked, setTermsChecked] = React.useState<
    StringIndexedObjects<boolean>
  >({
    gathering: false,
    thirdparty: false,
  });
  const [modalStates, setModalStates] = React.useState<
    StringIndexedObjects<boolean>
  >({
    region: false,
    terms: false,
  });
  /* ############################################# */

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
  /* ############### 수정 내용: 함수 추가 ############### */
  const setTerms = (value: string) => {
    setTermsContents(value);
  };

  const onOpenModal = React.useCallback(openModal, [modalStates]);

  function openModal(
    event: React.MouseEvent | React.FocusEvent,
    target: string,
  ) {
    setModalStates({
      ...modalStates,
      [target]: !modalStates[target],
    });
  }

  const onCloseModal = React.useCallback(closeModal, [modalStates]);

  function closeModal(event: React.MouseEvent, selectedRegion?: string) {
    if ((event.target as HTMLElement).id) {
      const modalKeys = Object.keys(modalStates);
      const modalOpenValues = Object.values(modalStates);
      const currentOpenedModals = modalOpenValues
        .map((state: boolean, index: number) => {
          let result = '';
          if (state) {
            result = modalKeys[index];
          }
          return result;
        })
        .filter((result: string) => result !== '');
      currentOpenedModals.forEach((openedModal: string) => {
        setModalStates({
          ...modalStates,
          [openedModal]: !modalStates[openedModal],
        });
      });
      if (selectedRegion) {
        setValueByModal(selectedRegion);
        handleAddress(selectedRegion);
      }
    }
  }

  const handleCheck = React.useCallback(
    (event: React.MouseEvent, state: StringIndexedObjects<boolean>) =>
      onClickHandleCheck(event, state),
    [],
  );

  function onClickHandleCheck(
    event: React.MouseEvent,
    state: StringIndexedObjects<boolean>,
  ) {
    const currentTargetId = event.currentTarget.id.split('-')[0];
    if (currentTargetId) {
      setTermsChecked({
        ...state,
        [currentTargetId]: !state[currentTargetId],
      });
    } else {
      setTermsChecked({
        ...state,
      });
    }
  }
  /* ############################################# */

  const allTermsChecked = Object.values(areTermsChecked).filter(
    (status: boolean) => status,
  ).length;

  React.useEffect(() => {
    const isAnyModalActive = Object.values(modalStates).filter(
      (modalState: boolean) => modalState,
    ).length;
    setScrollLocation(window.scrollY);
    if (isAnyModalActive >= 1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalStates]);

  console.log(cellular);
  return (
    <section className="w-full flex justify-center overflow-y-scroll">
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
            handleName((nameRef.current as HTMLInputElement).value);
          }}
          onChange={(event) => onNameChange(event)}
        />
        <Gender genderChange={genderChange} setGenderChange={setGenderChange} />
        <TextInput
          type="number"
          placeHolder="YYYYMMDD"
          value={birthday}
          valid={checkBirthday || birthday === ''}
          text="생년월일"
          ref={birthdayRef}
          onKeyUp={() => {
            handleBirthday((birthdayRef.current as HTMLInputElement).value);
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
          // onKeyUp={() => {
          //   handleAddress((addressRef.current as HTMLInputElement).value);
          // }}
          onFocus={(event: React.FocusEvent) => openModal(event, 'region')}
          onChange={() => undefined}
          readOnly
        />
        <TextInput
          type="text"
          placeHolder="'-'없이 입력해주세요"
          value={cellular}
          valid={checkCellular || cellular === ''}
          text="연락처"
          ref={cellularRef}
          onKeyUp={() => {
            handleCellular((cellularRef.current as HTMLInputElement).value);
          }}
          onChange={(event) => onMobileChange(event)}
        />
        <TextInput
          type="text"
          placeHolder="MYD@snplab.com"
          value={email}
          valid={checkEmail || email === ''}
          text="이메일"
          ref={emailRef}
          onKeyUp={() => {
            handleEmail((emailRef.current as HTMLInputElement).value);
          }}
          onChange={(event) => onEmailChange(event)}
        />
        <Tranportation
          tranportation={tranportation}
          setTranportation={setTranportation}
        />
        <Terms
          openModal={onOpenModal}
          closeModal={onCloseModal}
          modalStates={modalStates}
          setTerms={setTerms}
          checkedTerms={allTermsChecked}
          allTerms={areTermsChecked}
          changeCheck={handleCheck}
        />
        <div
          className={`flex justify-center w-full h-9 mb-4 rounded-xl 
        ${
          checkName &&
          genderChange !== null &&
          tranportation.length !== 0 &&
          checkBirthday &&
          checkAddress &&
          checkCellular &&
          checkEmail &&
          allTermsChecked === 2
            ? 'bg-gray-600 text-zinc-50'
            : 'bg-gray-100 text-gray-400'
        }  items-center`}
          //  onClick={()={alert('지원이 완료되었습니다'){window.location ={LandingPage}}}}
        >
          지원하기
        </div>
      </article>
      {modalStates.terms && (
        <Modal onClick={onCloseModal}>
          <TermsDetail
            contents={termsContents}
            closeModal={onCloseModal}
            windowScrollLocation={windowScrollLocation}
          />
        </Modal>
      )}
      {modalStates.region && (
        <Modal>
          <SelectRegion
            closeModal={onCloseModal}
            windowScrollLocation={windowScrollLocation}
          />
        </Modal>
      )}
    </section>
  );
}

export default RegisterPage;
