import { ActionType } from '../types/types';

interface CheckingFinishAction {
  type: ActionType.authCheckingFinish;
  payload: string;
}

interface LoginStartAction {
  type: ActionType.authLoginStart;
  payload: string;
}

interface LoginAction {
  type: ActionType.authLogin;
  payload: any;
}
interface RegisterStartAction {
  type: ActionType.authRegisterStart;
  payload: string;
}

interface StartTokenRefreshAction {
  type: ActionType.authStartTokenRefresh;
  payload: string;
}

interface authLogoutAction {
  type: ActionType.authLogout;
  payload: string;
}

export type Action =
  | CheckingFinishAction
  | LoginStartAction
  | LoginAction
  | RegisterStartAction
  | StartTokenRefreshAction
  | authLogoutAction;
