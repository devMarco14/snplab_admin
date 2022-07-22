import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';

const button =
  'mb-4 p-4 hover:bg-neutral-500 ease-in duration-300 rounded-lg border-solid border-2 bg-buttonActive text-slate-50';

export default function Landing() {
  return (
    <section className="flex flex-col justify-around w-full max-w-md h-screen mx-auto p-8 bg-slate-50 text-center">
      <section>
        <h1 className="flex justify-center items-center w-32 h-32 mx-auto mb-8 border-solid border-2 rounded-full border-neutral-600 text-2xl animate-[slideUp_1000ms_ease-out_forwards]">
          SNP
          <span className="block px-1 bg-neutral-600 text-slate-50 ">
            LAB
          </span>{' '}
        </h1>
        <p className="leading-5 animate-[slideUp_1500ms_ease-out_forwards]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et.
          Qui officia est aliquam placeat facere illum debitis veritatis
          corporis voluptatem eligendi, eaque pariatur quo deleniti, quos omnis
          vitae atque.
        </p>
      </section>
      <section className="flex flex-col animate-[slideUp_1500ms_ease-out_forwards]">
        <Link className={button} to={Path.Register}>
          지원하기
        </Link>
        <button className={button} type="submit">
          관리자 로그인
        </button>
      </section>
    </section>
  );
}
