import React from 'react';
import { SampleStructure } from './sample.structure';

export interface SampleProps {}

export const Sample: React.FC<SampleProps> = (props) => {
  const childrenProps: SampleProps = {
    ...props,
  };
  return <SampleStructure {...childrenProps} />;
};
