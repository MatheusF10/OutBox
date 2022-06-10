import { Actions } from '../../types/actions';
import { action } from 'typesafe-actions';

export const modalShow = (modalState: boolean) =>
  action(Actions.modal_Show, modalState);
