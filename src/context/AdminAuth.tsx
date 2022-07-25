/* eslint-disable @typescript-eslint/no-empty-function */
import useAdminData from 'pages/landing/hooks/useAdminData';
import React, { useCallback } from 'react';
import { ImportChildren } from 'types/interfaces';

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
  const { data: adminData } = useAdminData();

  React.useEffect(() => {
    const isAdminLoggedin = localStorage.getItem('isLoggedin');
    isAdminLoggedin === 'true' && setLogin(true);
  }, []);

  const onLogin = useCallback(
    (email: string, password: string) => {
      const isAuthorized = adminData.some(
        (admin: { email: string; password: string }) =>
          admin.email === email && admin.password === password,
      );

      isLoggedin !== isAuthorized && setLogin(isAuthorized);
      !isAuthorized && alert('이메일, 비밀번호가 일치하지 않습니다');
      localStorage.setItem('isLoggedin', isAuthorized);
    },
    [adminData, isLoggedin],
  );

  const onLogout = () => {
    const isLogoutConfirmed = window.confirm('로그아웃 하시겠습니까?');

    if (!isLogoutConfirmed) return;
    isLogoutConfirmed && setLogin(false);
    localStorage.setItem('isLoggedin', 'false');
  };

  const contextValue = React.useMemo(() => {
    return {
      isLoggedin,
      onLogin,
      onLogout,
    };
  }, [isLoggedin, onLogin]);

  return (
    <AdminAuthContext.Provider value={contextValue}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthContext;
