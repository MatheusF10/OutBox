import React from 'react';
import { ProfileStructure } from './profile.structure';

export interface ProfileProps {
  size: string;
  absolute?: boolean;
}

export const Profile: React.FC<ProfileProps> = (props) => {
  const childrenProps: ProfileProps = {
    ...props,
  };
  return <ProfileStructure {...childrenProps} />;
};
