import Modal from 'components/modal/Modal';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import AdminAuthContext from 'context/AdminAuth';
import Logo from './components/Logo';
import AdminLoginForm from './components/AdminLoginForm';

const button =
  'mb-4 rounded-lg border-solid border-2 p-4 bg-buttonActive text-slate-50 hover:bg-neutral-500 ease-in duration-300 ';

export default function Landing() {
  const [isLoginFormVisible, setLoginFormVisible] = React.useState(false);
  const { isLoggedin, onLogout } = React.useContext(AdminAuthContext);

  const handleModalVisible = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    switch (target.id) {
      case 'modal-bg':
        setLoginFormVisible(false);
        break;
      case 'login-button':
        setLoginFormVisible(true);
        break;
    }
  };

  return (
    <section className="relative flex flex-col justify-around w-full max-w-md h-screen mx-auto p-8 text-center">
      <Logo />
      <strong className="flex flex-col font-normal animate-[slideUp_1500ms_ease-out_forwards]">
        <Link className={button} to={Path.Register}>
          지원하기
        </Link>
        {!isLoggedin && (
          <button
            className={button}
            type="submit"
            id="login-button"
            onClick={handleModalVisible}
          >
            관리자 로그인
          </button>
        )}
        {isLoggedin && (
          <button className={button} type="submit" onClick={onLogout}>
            관리자 로그아웃
          </button>
        )}
      </strong>
      {isLoginFormVisible && (
        <Modal onClick={handleModalVisible}>
          <AdminLoginForm onCancelClick={() => setLoginFormVisible(false)} />
        </Modal>
      )}
    </section>
  );
}
