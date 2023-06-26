import { AUTH_LOADING, PSMT_REGISTER_SUCCESS,PSMT_REGISTER_ERROR ,CLIENT_EDIT_SUCCESS,CLIENT_EDIT_ERROR} from "../actions/types";

const initialState = {
  
    psmt_register: {},
    error: {},
    loading: false
}

export default function PsmtReducers(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
     

        case PSMT_REGISTER_SUCCESS:
            return {
                ...state,
                psmt_register: action.payload,
                loading: false,
                error: {}
            }

        case PSMT_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                psmt_register: {},
                loading: false
            }

        default:
            return state
    }
}