import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsChevronRight } from 'react-icons/bs';

interface TermsButtonProps {
  id: string;
  handleModal: (event: React.MouseEvent) => void;
}

export default function TermsButton({ id, handleModal }: TermsButtonProps) {
  // ########## 체크 버튼 색상 변경용 - 추후 다른 로직으로 변경 필요
  const [isClicked, setClicked] = React.useState<boolean>(false);
  const buttonLabel =
    id === 'gathering'
      ? '개인정보 처리방침 고지 (필수)'
      : '제3자 정보제공 동의 (필수)';

  return (
    <section className="flex-center h-[30px] w-[300px]">
      <button
        type="button"
        className="flex-center h-[30px] w-[30px]"
        onClick={() => setClicked(!isClicked)}
      >
        <AiOutlineCheck
          className={`${isClicked ? 'text-blackFont' : 'text-grayFont'}`}
        />
      </button>
      <p className="w-full">{buttonLabel}</p>
      <button
        type="button"
        id={id}
        className="flex-center h-[30px] w-[30px]"
        onClick={handleModal}
      >
        <BsChevronRight />
      </button>
    </section>
  );
}
