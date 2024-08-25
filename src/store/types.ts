// src/store/types.ts
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface Product{
    id: number;
    name: string;
    price: number;
  }
  export const ADD_USER = 'ADD_USER';
  export const UPDATE_USER = 'UPDATE_USER';
  export const DELETE_USER = 'DELETE_USER';
  
  interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
  }
  
  interface UpdateUserAction {
    type: typeof UPDATE_USER;
    payload: User;
  }
  
  interface DeleteUserAction {
    type: typeof DELETE_USER;
    payload: number; // User ID
  }
  
  export type UserActionTypes = AddUserAction | UpdateUserAction | DeleteUserAction;
  