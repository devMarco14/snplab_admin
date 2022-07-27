/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { StringIndexedObjects } from 'types/interfaces';
import TermsButton from './terms/TermsButton';

interface TermsProps {
  openModal: (
    event: React.MouseEvent | React.FocusEvent,
    target: string,
  ) => void;
  closeModal: (event: React.MouseEvent) => void;
  modalStates: StringIndexedObjects<boolean>;
  setTerms: (value: string) => void;
  allTerms: StringIndexedObjects<boolean>;
  checkedTerms: number;
  changeCheck: (
    event: React.MouseEvent,
    state: StringIndexedObjects<boolean>,
  ) => void;
}

function Terms({
  openModal,
  closeModal,
  modalStates,
  setTerms,
  allTerms,
  checkedTerms,
  changeCheck,
}: TermsProps) {
  /* ############### 모달 대응을 위해 추가 ############### */
  const handleModal = React.useCallback(onClickHandleTerms, [
    closeModal,
    openModal,
    setTerms,
    modalStates.terms,
  ]);

  function onClickHandleTerms(event: React.MouseEvent) {
    const currentTargetId = event.currentTarget.id.split('-')[0];
    if (modalStates.terms) {
      closeModal(event);
    } else {
      openModal(event, 'terms');
    }
    setTerms(currentTargetId);
  }
  /* ############### ############### */

  return (
    <div className="flex-col">
      <label className="flex-cl items-center" htmlFor="ckeckBox">
        <div className="flex mr-3 mb-4 items-center">
          <div
            className={`flex justify-center w-5 h-5 rounded-full border border-solid items-center cursor-pointer ${
              checkedTerms === 2
                ? 'bg-gray-600 text-zinc-50'
                : 'bg-zinc-50 text-gray-400'
            }`}
            onClick={(event: React.MouseEvent) => {
              changeCheck(event, {
                ...allTerms,
                gathering: checkedTerms <= 1,
                thirdparty: checkedTerms <= 1,
              });
            }}
          >
            ✓
          </div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">이용약관 모두 동의</div>
        </div>
        <div className="w-full mb-4 border-b border-solid border-black" />
        {/* ############### TermsButton으로 대체 ############### */}
        {/* <div className="flex items-center mb-4">
          <div className={termsStyle}>✓</div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">개인정보 처리방침 고지(필수)</div>
        </div>
        <div className="flex items-center mb-4">
          <div className={termsStyle}>✓</div>
          <input className="hidden" type="radio" id="ckeckBox" />
          <div className="ml-1 text-gray-400">제3자 정보제공 동의(필수)</div>
        </div> */}
        {/* ############### ############### */}
        <TermsButton
          id="gathering"
          handleModal={handleModal}
          totalCheck={allTerms}
          handleCheck={changeCheck}
        />
        <TermsButton
          id="thirdparty"
          handleModal={handleModal}
          totalCheck={allTerms}
          handleCheck={changeCheck}
        />
      </label>
    </div>
  );
}

export default Terms;
