import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { gathering, thirdparty } from 'pages/register/assets/termsText';
import useDetectResize from 'pages/register/hooks/useDetectResize';
import TermsBody from './TermsBody';

interface TermsDetailPropsType {
  contents: string;
  closeModal: (event: React.MouseEvent) => void;
  windowScrollLocation: number;
}

export default function TermsDetail({
  contents,
  closeModal,
  windowScrollLocation,
}: TermsDetailPropsType) {
  const bodyText = contents === 'gathering' ? gathering : thirdparty;
  const processedString = bodyText
    .split('\n')
    .filter((string: string) => string !== '');
  useDetectResize();

  return (
    <article
      className="absolute modalChild flex flex-col z-10 bg-white w-[320px] h-screen overflow-x-hidden overflow-y-auto sm:w-[550px] sm:h-[800px]"
      style={{
        // top: window.innerWidth >= 640 ? '50%' : `${windowScrollLocation}px`,
        height:
          // eslint-disable-next-line no-nested-ternary
          window.innerWidth > window.innerHeight
            ? '100%'
            : window.innerWidth >= 640
            ? '550px'
            : '100%',
      }}
    >
      <section className="flex items-center h-[7%] min-h-[3rem]">
        <button
          type="button"
          className="flex justify-center items-center w-[40px] h-full min-h-[40px] ml-2"
          id="previous-button"
          onClick={closeModal}
        >
          <BsChevronLeft id="previous-svg" />
        </button>
        <p className="ml-2 font-bold">서비스 이용약관</p>
      </section>
      <hr className="border-grayFont" />
      <TermsBody bodyText={processedString} />
    </article>
  );
}
