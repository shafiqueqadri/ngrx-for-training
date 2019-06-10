import { Action } from '@ngrx/store';

export enum EUserActions {
    ADD_USER = '[USER] Add User',
    ADD_USER_SUCCESS = '[USER] Add User SUCCESS',
}

export class AddUser implements Action {
    public readonly type = EUserActions.ADD_USER;
    constructor() {}
}

export class AddUserSuccess implements Action {
    public readonly type = EUserActions.ADD_USER_SUCCESS;
    constructor(public payload: any) {}
}

export type UserActions = AddUser | AddUserSuccess;
