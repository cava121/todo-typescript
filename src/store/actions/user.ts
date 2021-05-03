import axios from 'axios';
import { Dispatch } from 'react';
import { UserActionsType } from '../../types/user';
import { IUserAction } from './../../types/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: UserActionsType.FETCH_USERS });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: UserActionsType.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserActionsType.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
