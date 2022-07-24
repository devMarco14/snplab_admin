import React from 'react';

interface TermsBodyType {
  bodyText: string[];
}

export default function TermsBody({ bodyText }: TermsBodyType) {
  const headPart = bodyText.slice(0, 2);
  const header = headPart.map((headerText: string, index: number) => {
    return (
      <h1 key={`${headerText[index]}_${index}`} className="text-2xl font-bold">
        {headerText}
      </h1>
    );
  });
  const subHeader = bodyText.slice(2, 3)[0];
  const bodyPart = bodyText.slice(3);
  const body = bodyPart.map((text: string, index: number) => {
    let result;
    if (text[0] === '제') {
      result = (
        <p
          key={`${text[index]}_${index}`}
          className="leading-5 mt-6 text-buttonActive font-bold"
        >
          {text}
        </p>
      );
    } else {
      result = (
        <p
          key={`${text[index]}_${index}`}
          className="leading-5 text-buttonActive font-bold"
        >
          {text}
        </p>
      );
    }
    return result;
  });
  return (
    <section className="p-5 pt-10">
      {header}
      <p className="mt-5 text-grayFont leading-5 font-bold">{subHeader}</p>
      {body}
    </section>
  );
}
