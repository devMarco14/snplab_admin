/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { ImportChildren } from 'types/interfaces';
import PortalWrapper from './PortalWrapper';

interface ModalPropsType extends ImportChildren {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Modal({ children, onClick }: ModalPropsType) {
  return (
    <PortalWrapper>
      <div
        className="w-full h-full absolute inset-0 bg-modalBackground"
        id="modal-bg"
        onClick={onClick}
      >
        {children}
      </div>
    </PortalWrapper>
  );
}
