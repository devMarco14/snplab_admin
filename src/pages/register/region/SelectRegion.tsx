import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function SelectRegion({ contents }: { contents: string }) {
  return (
    <article className="flex flex-col w-full h-full">
      <section className="flex-center max-h-[7%] h-[7%] min-h-[3rem] px-5">
        <button type="button" className="flex-center w-[30px] h-[30px]">
          <AiOutlineClose className="fill-grayFont text-2xl" />
        </button>
        <p className="w-full font-bold text-center text-xl">거주지역 선택</p>
      </section>
      <hr className="border-grayFont" />
      <button
        type="button"
        className="h-[7%] mx-5 rounded-2xl bg-buttonActive font-bold text-white text-xl"
      >
        확인
      </button>
    </article>
  );
}
