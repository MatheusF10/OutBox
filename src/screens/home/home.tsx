import React from 'react';
import { HomeStructure } from './home.structure';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
  const childrenProps: HomeProps = {
    ...props,
  };
  return <HomeStructure {...childrenProps} />;
};
