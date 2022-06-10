import React from 'react';
import { ProfileScreenStructure } from './profile.structure';

export interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const childrenProps: ProfileScreenProps = {
    ...props,
  };
  return <ProfileScreenStructure {...childrenProps} />;
};
