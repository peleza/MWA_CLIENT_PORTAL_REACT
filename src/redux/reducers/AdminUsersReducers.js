import { USERLIST_SUCCESS, AUTH_LOADING, USER_DETAIL_SUCCESS, USER_VERIFICATION_SUCCESS } from "../actions/types";

const initialState = {
    user_list: {},
    user_detail: [],
    user_verification: {},
    loading: false
}

export default function AdminUsersReducers(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case USERLIST_SUCCESS:
            return {
                ...state,
                user_list: action.payload,
                loading: false
            }
        case USER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                user_detail: action.payload
            }
        case USER_VERIFICATION_SUCCESS:
            return {
                ...state,
                user_verification: action.payload,
                loading: false
            }
        default:
            return state
    }
}