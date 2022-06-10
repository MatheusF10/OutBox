import { Actions } from './../../types/actions';
import { Reducer } from 'redux';

export interface ModalState {
  modalShow: boolean;
}

const modalInitalState = {
  modalShow: false,
};
export const modalStateReducer: Reducer<ModalState> = (
  state = modalInitalState,
  action
) => {
  switch (action.type) {
    case Actions.modal_Show: {
      return { ...state, modalShow: !state.modalShow };
    }
  }
  return state;
};
