import React from 'react';
import { createPortal } from 'react-dom';
import { ImportChildren } from 'types/interfaces';

export default function PortalWrapper({ children }: ImportChildren) {
  const modal = document.querySelector('#modal') as HTMLElement;
  return createPortal(children, modal);
}