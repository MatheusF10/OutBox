import React from 'react';
import { UserInputStructure } from './userInput.structure';

export interface UserInputProps {}

export const UserInput: React.FC<UserInputProps> = (props) => {
  const childrenProps: UserInputProps = {
    ...props,
  };
  return <UserInputStructure {...childrenProps} />;
};
