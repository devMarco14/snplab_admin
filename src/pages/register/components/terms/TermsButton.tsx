import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';
import { StringIndexedObjects } from 'types/interfaces';

interface TermsButtonProps {
  id: string;
  handleModal: (event: React.MouseEvent) => void;
  totalCheck: StringIndexedObjects<boolean>;
  handleCheck: (event: React.MouseEvent) => void;
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

  return (
    <section className="flex-center h-[30px] w-[300px]">
      <button
        type="button"
        className="flex-center h-[30px] w-[30px]"
        id={`${id}-button-check`}
        onClick={(event: React.MouseEvent) => {
          handleCheck(event);
        }}
      >
        <AiOutlineCheck
          className={`${totalCheck[id] ? 'text-blackFont' : 'text-grayFont'}`}
        />
      </button>
      <p className="w-full">{buttonLabel}</p>
      <button
        type="button"
        id={`${id}-button-more`}
        className="flex-center h-[30px] w-[30px]"
        onClick={handleModal}
      >
        <BsChevronRight id={`${id}-button-more-svg`} />
      </button>
    </section>
  );
}
