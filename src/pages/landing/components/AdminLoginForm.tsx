import AdminAuthContext from 'context/AdminAuth';
import React, { useContext, useRef } from 'react';
import { FiX as CancelIcon, FiUserCheck as UserIcon } from 'react-icons/fi';

interface AdminLoginFormPropsType {
  onCancelClick: (event: React.MouseEvent) => void;
}

const input = 'mb-2 p-2 rounded-lg border-solid border-2';
const button =
  'rounded-lg border-solid border-2 p-4 bg-blue-500 text-slate-50 hover:bg-blue-400 ease-in duration-300 ';

function AdminLoginForm({ onCancelClick }: AdminLoginFormPropsType) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { onLogin } = useContext(AdminAuthContext);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!emailRef?.current?.value || !passwordRef?.current?.value) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    onLogin(email, password);

    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <form
      className="modalChild flex flex-col justify-between h-1/2 min-h-[350px] w-8/12 min-w-[300px] max-w-[350px] z-10 rounded p-4 bg-slate-50"
      onSubmit={handleLogin}
    >
      <strong className="font-normal text-center">
        <UserIcon className="mx-auto mb-4 text-6xl" />
        <h1 className="text-base font-semibold">관리자 로그인</h1>
      </strong>
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="관리자 이메일"
          className={input}
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="관리자 비밀번호"
          className={input}
          ref={passwordRef}
        />
        <button type="submit" className={button}>
          로그인
        </button>
        <button
          className="absolute top-4 right-4 text-2xl hover:text-red-700 ease-in duration-300"
          type="button"
          onClick={onCancelClick}
        >
          <CancelIcon />
        </button>
      </div>
    </form>
  );
}

export default AdminLoginForm;
