import { Dispatch } from 'redux';
import { Action } from '../Interfaces/IActions';
import { fetchSinToken } from '../helpers/fetch';
import { ActionType } from '../types/types';

export const startLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const resp = await fetchSinToken('auth', { email, password }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem(
        'token-initial-time',
        new Date().getTime().toString()
      );
      dispatch(login({ uid: body.uid, name: body.name }));
    } else {
      console.log('Error');
    }
  };
};

const login = (user: any) => ({
  type: ActionType.authLogin,
  payload: user,
});
