// src/store/actions/userActions.ts
import { User, ADD_USER, UPDATE_USER, DELETE_USER, UserActionTypes } from '../types';

export const addUser = (user: User): UserActionTypes => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user: User): UserActionTypes => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (userId: number): UserActionTypes => ({
  type: DELETE_USER,
  payload: userId,
});
