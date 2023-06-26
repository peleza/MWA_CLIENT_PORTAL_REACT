import { AUTH_LOADING, COUNTRYACTIVEINACTIVE_SUCCESS, COUNTRYADD_ERROR, COUNTRYADD_SUCCESS, COUNTRYEDIT_SUCCESS, COUNTRYLIST_SUCCESS, } from "../actions/types";

const initialState = {
    country_list: [],
    country_add: {},
    country_edit: {},
    country_activeInactive: {},
    error: {},
    loading: false
}

export default function AdminCountryReducers(state = initialState, action) {
    console.log("AdminCountryReducers payload", action.payload);
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case COUNTRYLIST_SUCCESS:
            return {
                ...state,
                country_list: action.payload,
                loading: false
            }
        case COUNTRYEDIT_SUCCESS:
            return {
                ...state,
                country_edit: action.payload,
                loading: false
            }
        case COUNTRYADD_SUCCESS:
            return {
                ...state,
                country_add: action.payload,
                loading: false
            }
        case COUNTRYADD_ERROR:
            return {
                ...state,
                error: action.payload,
                country_add: {},
                loading: false
            }
        case COUNTRYACTIVEINACTIVE_SUCCESS:
            return {
                ...state,
                country_activeInactive: action.payload,
                loading: false
            }
        default:
            return state
    }
}