import { ActionType } from '../types/types';
import { Action } from '../Interfaces/IActions';
const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case ActionType.authCheckingFinish:
      return {
        ...state,
        checking: false,
        mensaje: 'Todo chido :D',
      };
    case ActionType.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
