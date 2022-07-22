import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import Logo from './Logo';

const button =
  'mb-4 p-4 hover:bg-neutral-500 ease-in duration-300 rounded-lg border-solid border-2 bg-buttonActive text-slate-50';

export default function Landing() {
  return (
    <section className="flex flex-col justify-around w-full max-w-md h-screen mx-auto p-8 bg-slate-50 text-center">
      <Logo />
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
