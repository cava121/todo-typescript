import axios from 'axios';
import { Dispatch } from 'react';
import { TodoActionsType } from '../../types/todo';
import { ITodoAction } from './../../types/todo';

export const fetchTodo = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<ITodoAction>) => {
    try {
      dispatch({ type: TodoActionsType.FETCH_TODO });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: { _page: page, _linit: limit },
        }
      );
      dispatch({
        type: TodoActionsType.FETCH_TODO_SUCCESS,
        payload: { data, page },
      });
    } catch (error) {
      dispatch({
        type: TodoActionsType.FETCH_TODO_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
