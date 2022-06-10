import React from 'react';
import { ModalStructure } from './modal.structure';

export interface ModalProps {}

export const Modal: React.FC<ModalProps> = (props) => {
  const childrenProps: ModalProps = {
    ...props,
  };
  return <ModalStructure {...childrenProps} />;
};
