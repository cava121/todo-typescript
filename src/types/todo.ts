export enum TodoActionsType {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
}

export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: string | null;
  currentPage: number;
}

export interface ITodoAction {
  type: TodoActionsType;
  payload?: any;
}
