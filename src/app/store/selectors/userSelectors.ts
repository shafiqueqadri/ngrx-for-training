import { createSelector } from '@ngrx/store';

const userState = (state: any) => state.users;
export const getUsersSelector = createSelector(userState, (users: any) => users);
