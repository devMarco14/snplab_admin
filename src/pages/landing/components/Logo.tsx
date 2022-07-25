import React from 'react';

export default function Logo() {
  return (
    <section>
      <h1 className="flex justify-center items-center w-32 h-32 mx-auto mb-8 border-solid border-2 rounded-full border-neutral-600 text-2xl animate-[slideUp_1000ms_ease-out_forwards]">
        SNP
        <span className="block px-1 bg-neutral-600 text-slate-50 ">
          LAB
        </span>{' '}
      </h1>
      <p className="leading-5 animate-[slideUp_1500ms_ease-out_forwards]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et.
        Qui officia est aliquam placeat facere illum debitis veritatis corporis
        voluptatem eligendi, eaque pariatur quo deleniti, quos omnis vitae
        atque.
      </p>
    </section>
  );
}
