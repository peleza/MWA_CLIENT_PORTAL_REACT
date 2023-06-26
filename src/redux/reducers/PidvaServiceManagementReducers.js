import { AUTH_LOADING, SERVICEACTIVEINACTIVE_SUCCESS, SERVICEADD_ERROR, SERVICEADD_SUCCESS, SERVICEEDIT_SUCCESS, SERVICELIST_SUCCESS, } from "../actions/types";

const initialState = {
    service_list: {},
    service_add: {},
    service_edit: {},
    service_activeInactive: {},
    error: {},
    loading: false
}

export default function PidvaServiceManagementReducers(state = initialState, action) {
    console.log("PidvaServiceManagementReducers payload", action.payload);
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case SERVICELIST_SUCCESS:
            return {
                ...state,
                service_list: action.payload,
                loading: false
            }
        case SERVICEEDIT_SUCCESS:
            return {
                ...state,
                service_edit: action.payload,
                loading: false
            }
        case SERVICEADD_SUCCESS:
            return {
                ...state,
                service_add: action.payload,
                loading: false
            }
        case SERVICEADD_ERROR:
            return {
                ...state,
                error: action.payload,
                service_add: {},
                loading: false
            }
        case SERVICEACTIVEINACTIVE_SUCCESS:
            return {
                ...state,
                service_activeInactive: action.payload,
                loading: false
            }
        default:
            return state
    }
}