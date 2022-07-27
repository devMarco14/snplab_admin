/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { StringIndexedObjects } from 'types/interfaces';

interface TermsButtonProps {
  id: string;
  handleModal: (event: React.MouseEvent) => void;
  totalCheck: StringIndexedObjects<boolean>;
  handleCheck: (
    event: React.MouseEvent,
    state: StringIndexedObjects<boolean>,
  ) => void;
}

export default function TermsButton({
  id,
  handleModal,
  totalCheck,
  handleCheck,
}: TermsButtonProps) {
  const buttonLabel =
    id === 'gathering'
      ? '개인정보 처리방침 고지 (필수)'
      : '제3자 정보제공 동의 (필수)';
  /* ############### 종혁님 코드로 수정 ############### */
  return (
    <div className="flex items-center mb-4">
      <div
        className={`flex justify-center w-5 h-5 items-center cursor-pointer ${
          totalCheck[id] ? 'text-blackFont' : 'text-grayFont'
        }`}
        id={`${id}-button-check`}
        onClick={(event: React.MouseEvent) => {
          handleCheck(event, totalCheck);
        }}
      >
        ✓
      </div>
      <input className="hidden" type="radio" id="ckeckBox" />
      <div className="ml-1 text-gray-400">{buttonLabel}</div>
      <button
        type="button"
        id={`${id}-button-more`}
        className="flex-center h-[30px] w-[30px] text-gray-400"
        onClick={handleModal}
      >
        <BsChevronRight id={`${id}-button-more-svg`} />
      </button>
    </div>
  );
}
