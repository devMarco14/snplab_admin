import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { gathering, thirdparty } from 'pages/register/assets/termsText';
import TermsBody from './TermsBody';

export default function Terms({ contents }: { contents: string }) {
  const bodyText = contents === 'gathering' ? gathering : thirdparty;
  const processedString = bodyText
    .split('\n')
    .filter((string: string) => string !== '');

  return (
    <article className="modalChild bg-white w-1/2 h-max flex flex-col">
      <section className="flex items-center max-h-[7%] h-[7%] min-h-[3rem] px-5">
        <button type="button">
          <BsChevronLeft />
        </button>
        <p className="ml-5 font-bold">서비스 이용약관</p>
      </section>
      <hr className="border-grayFont" />
      <TermsBody bodyText={processedString} />
    </article>
  );
}
