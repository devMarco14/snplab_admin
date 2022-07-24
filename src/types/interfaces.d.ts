import React from 'react';

export interface ImportChildren {
  children?: React.ReactNode;
}

export interface StringIndexedObjects<T> {
  [index: string]: T;
}
