/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImportChildren } from 'types/interfaces';
import Path from 'routes/Path';
import useAdminAuthLoad from 'pages/landing/hooks/useAdminAuthLoad';

interface AdminAuthContextType {
  isLoggedin: null | boolean;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

const AdminAuthContext = React.createContext<AdminAuthContextType>({
  isLoggedin: null,
  onLogin: (email: string, password: string) => {},
  onLogout: () => {},
});

export function AdminAuthProvider({ children }: ImportChildren) {
  const [isLoggedin, setLogin] = React.useState<boolean | null>(null);
  const { data: adminAuthData } = useAdminAuthLoad();
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAdminLoggedin = localStorage.getItem('isLoggedin');
    isAdminLoggedin === 'true' && setLogin(true);
  }, []);

  const onLogin = React.useCallback(
    (email: string, password: string) => {
      const isVerified = adminAuthData.some(
        (admin: { email: string; password: string }) =>
          admin.email === email && admin.password === password,
      );

      if (!isVerified) {
        alert('이메일, 비밀번호가 일치하지 않습니다');
        return;
      }

      !isLoggedin && setLogin(true);
      localStorage.setItem('isLoggedin', 'true');
      navigate(Path.Admin, { replace: true });
    },
    [adminAuthData, isLoggedin, navigate],
  );

  const onLogout = React.useCallback(() => {
    const isLogoutConfirmed = window.confirm('로그아웃 하시겠습니까?');

    if (!isLogoutConfirmed) return;

    setLogin(false);
    localStorage.removeItem('isLoggedin');
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      isLoggedin,
      onLogin,
      onLogout,
    };
  }, [isLoggedin, onLogin, onLogout]);

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthContext;
