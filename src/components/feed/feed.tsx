import React from 'react';
import { FeedStructure } from './feed.structure';

export interface FeedProps {}

export const Feed: React.FC<FeedProps> = (props) => {
  const childrenProps: FeedProps = {
    ...props,
  };
  return <FeedStructure {...childrenProps} />;
};
