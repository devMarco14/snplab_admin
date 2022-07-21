import React from 'react';

interface TermsBodyType {
  bodyText: string[];
}

export default function TermsBody({ bodyText }: TermsBodyType) {
  const headPart = bodyText[0];
  const header = headPart.slice(1, headPart.length - 2);
  const subHeader = bodyText.slice(1)[0];
  const bodyPart = bodyText.slice(2);
  const body = bodyPart.map((text: string) => {
    let result;
    if (text[0] === '제') {
      result = (
        <>
          <br />
          <p>{text}</p>
        </>
      );
    } else {
      result = <p>{text}</p>;
    }
    return result;
  });
  return (
    <div>
      <h1>{header}</h1>
      <p>{subHeader}</p>
      {body}
    </div>
  );
}
