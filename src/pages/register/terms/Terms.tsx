import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { gathering, thirdparty } from 'pages/register/assets/termsText';
import TermsBody from './TermsBody';

interface TermsPropsType {
  contents: string;
  onClose: (event: React.MouseEvent) => void;
}

export default function Terms({ contents, onClose }: TermsPropsType) {
  const bodyText = contents === 'gathering' ? gathering : thirdparty;
  const processedString = bodyText
    .split('\n')
    .filter((string: string) => string !== '');

  return (
    <article className="modalChild flex flex-col z-10 bg-white w-1/2 h-max">
      <section className="flex items-center h-[7%] min-h-[3rem]">
        <button
          type="button"
          className="flex justify-center items-center w-[40px] h-full min-h-[40px] ml-2"
          id="previous"
          onClick={onClose}
        >
          <BsChevronLeft id="svg" />
        </button>
        <p className="ml-2 font-bold">서비스 이용약관</p>
      </section>
      <hr className="border-grayFont" />
      <TermsBody bodyText={processedString} />
    </article>
  );
}
