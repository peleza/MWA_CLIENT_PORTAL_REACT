import { AUTH_LOADING, CLIENT_REGISTER_EMAIL_SUCCESS, CLIENT_REGISTER_EMAIL_ERROR, CLIENT_REQUEST_LIST_SUCCESS, CLIENT_LIST_SUCCESS, CLIENT_UPDATE_SUCCESS, COUNTRYACTIVEINACTIVE_SUCCESS, COUNTRYADD_ERROR, COUNTRYADD_SUCCESS, COUNTRYEDIT_SUCCESS, COUNTRYLIST_SUCCESS, CLIENT_REGISTER_SUCCESS, CLIENT_REGISTER_ERROR ,CLIENT_EDIT_SUCCESS,CLIENT_EDIT_ERROR,CLIENT_VERIFY_REQUEST_SUCCESS,CLIENT_VERIFY_REQUEST_ERROR} from "../actions/types";

const initialState = {
    client_request_list: {},
    client_list: {},
    client_update: {},
    client_register: {},
    client_edit: {},
    client_register_email: {},
    error: {},
    client_verify_data : {},
    loading: false
}

export default function AdminClientReducers(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLIENT_REQUEST_LIST_SUCCESS:
            return {
                ...state,
                client_request_list: action.payload,
                loading: false
            }
        case CLIENT_LIST_SUCCESS:
            return {
                ...state,
                client_list: action.payload,
                loading: false
            }

        case CLIENT_REGISTER_EMAIL_SUCCESS:
            return {
                ...state,
                client_register_email: action.payload,
                loading: false
            }

        case CLIENT_REGISTER_EMAIL_ERROR:
            return {
                ...state,
                client_register_email: action.payload,
                loading: false
            }


        case CLIENT_UPDATE_SUCCESS:
            return {
                ...state,
                client_update: action.payload,
                loading: false
            }

        case CLIENT_REGISTER_SUCCESS:
            return {
                ...state,
                client_register: action.payload,
                loading: false
            }

        case CLIENT_REGISTER_ERROR:
            return {
                ...state,
                client_register: action.payload,
                loading: false
            }

        case CLIENT_EDIT_SUCCESS:
            return {
                ...state,
                client_edit: action.payload,
                loading: false
            }

        case CLIENT_EDIT_ERROR:
            return {
                ...state,
                client_edit: action.payload,
                loading: false
            }
            case CLIENT_VERIFY_REQUEST_SUCCESS:
                return {
                    ...state,
                    client_verify_data: action.payload,
                    loading: false
                }
    
            case CLIENT_VERIFY_REQUEST_ERROR:
                return {
                    ...state,
                    client_verify_data: action.payload,
                    loading: false
                }
    

        default:
            return state
    }
}