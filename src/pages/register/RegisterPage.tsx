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
import TermsDetail from './components/terms/TermsDetail';
import SelectRegion from './components/region/SelectRegion';
import { StringIndexedObjects } from 'types/interfaces';

function RegisterPage() {
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
          // onKeyUp={() => {
          //   handleAddress((addressRef.current as HTMLInputElement).value);
          // }}
          onFocus={(event: React.FocusEvent) => openModal(event, 'region')}
          onChange={() => undefined}
          readOnly
          // onKeyUp={() => {
          //   handleAddress(addressRef?.current?.value);
          // }}
          // onChange={onChangeForm}
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
        <Terms
          openModal={onOpenModal}
          closeModal={onCloseModal}
          modalStates={modalStates}
          setTerms={setTerms}
          checkedTerms={allTermsChecked}
          allTerms={areTermsChecked}
          changeCheck={handleCheck}
        />
        <button
          className={`flex justify-center w-full h-9 mb-4 rounded-xl 
        ${
          disabledCheck
            ? 'bg-gray-600 text-zinc-50'
            : 'bg-gray-100 text-gray-400'
        }  items-center`}
          type="button"
          onClick={() => {
            changeModal();
            onSubmitMember();
          }}
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
                  navigate('/');
                }}
              >
                확인
              </button>
            </div>
          </Modal>
        )}
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
