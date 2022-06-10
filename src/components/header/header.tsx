import React from 'react';
import { HeaderStructure } from './header.structure';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  const childrenProps: HeaderProps = {
    ...props,
  };
  return <HeaderStructure {...childrenProps} />;
};
