export enum UserActionsType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUserState {
  users: any[];
  loading: boolean;
  error: string | null;
}

export interface IUserAction {
  type: UserActionsType;
  payload?: any;
}
