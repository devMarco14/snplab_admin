import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { gathering, thirdparty } from 'pages/landing/assets/termsText';
import TermsBody from './TermsBody';

export default function Terms({ contents }: { contents: string }) {
  const bodyText = contents === 'gathering' ? gathering : thirdparty;
  const processedString = bodyText
    .split('\n')
    .filter((string: string) => string !== '');
  return (
    <article>
      <section>
        <button type="button">
          <BsChevronLeft />
        </button>
        <p>서비스 이용약관</p>
      </section>
      <hr />
      <section>
        <TermsBody bodyText={processedString} />
      </section>
    </article>
  );
}
