import React from 'react';
import { ImportChildren } from 'types/interfaces';
import PortalWrapper from './PortalWrapper';

export default function Modal({ children }: ImportChildren) {
  return (
    <PortalWrapper>
      <div className="w-full h-full absolute inset-0 bg-modalBackground">
        {children}
      </div>
    </PortalWrapper>
  );
}