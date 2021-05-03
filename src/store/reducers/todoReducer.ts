import { ITodoAction, ITodoState, TodoActionsType } from '../../types/todo';

const initialState: ITodoState = {
  todos: [],
  currentPage: 1,
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: ITodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionsType.FETCH_TODO:
      return { ...state, loading: true };
    case TodoActionsType.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.data,
        currentPage: action.payload.page,
      };
    case TodoActionsType.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
