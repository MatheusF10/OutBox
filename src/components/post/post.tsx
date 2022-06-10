import React from 'react';
import { PostStructure } from './post.structure';

export interface PostProps {
  height: string;
  id: string;
  title: string;
  text: string;
}

export const Post: React.FC<PostProps> = (props) => {
  const childrenProps: PostProps = {
    ...props,
  };

  return <PostStructure {...childrenProps} />;
};
