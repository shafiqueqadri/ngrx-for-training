import { UserActions, EUserActions } from '../actions/userAction';

function usersReducers(users = [], action: UserActions) {
    switch (action.type) {
        case EUserActions.ADD_USER_SUCCESS: {
            users = [...users, action.payload];

            return users;
        }
        default:
            return users;
    }
}

export default usersReducers;
