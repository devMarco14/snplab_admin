import React from 'react';

export interface ImportChildren {
  children?: React.ReactNode;
}

export interface StringIndexedObjects<T> {
  [index: string]: T;
}

export interface Member {
  id: number;
  name: string;
  round: string;
  gender: string;
  birthday: string;
  address: string;
  cellular: string;
  email: string;
  transportation: string[];
  win: boolean;
}
