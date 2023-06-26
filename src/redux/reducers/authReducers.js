import { SET_CURRENT_USER,PSMT_OTP_SUCCESS,PSMT_OTP_ERROR, USER_ADD, AUTH_LOADING, USER_UPDATE, SIGNUP_SUCCESS, SIGNUP_ERRORS, OTP_ERRORS, OTP_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from '../actions/types';
const isEmpty = require('is-empty');
const initialState = {
	isAuthenticated: false,
	user: {},
	sign_up: {},
	otp: {},
	login: {},
	logout: {},
	set_user: {},
	reset_password: {},
	forgot_password: {},
	error: {},
	loading: false
};
export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_LOADING:
			return {
				...state,
				loading: true
			};
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				set_user: action.payload
			};
		case USER_ADD:
			return {
				isAuthenticated: !isEmpty(action.payload),
				set_user: action.payload
			};
		case USER_UPDATE:
			return {
				isAuthenticated: !isEmpty(action.payload),
				set_user: action.payload
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				login: action.payload,
				error: {},
				otp: {}
			}
		case LOGIN_ERROR:
			return {
				...state,
				loading: false,
				login: {},
				otp: {},
				error: action.payload
			}
		case SIGNUP_SUCCESS:
			return {
				...state,
				sign_up: action.payload,
				loading: false,
				error: {},
			};
		case SIGNUP_ERRORS:
			return {
				...state,
				loading: false,
				error: action.payload,
				sign_up: {}
			};
		case OTP_SUCCESS:
			return {
				...state,
				otp: action.payload,
				loading: false,
				error: {},
				login: {},
				sign_up: {},
			};
		case OTP_ERRORS:
			return {
				...state,
				loading: false,
				error: action.payload,
				otp: {}
			};
			case PSMT_OTP_SUCCESS:
				return {
					...state,
					otp: action.payload,
					loading: false,
					error: {},
					login: {},
					sign_up: {},
				};
			case PSMT_OTP_ERROR:
				return {
					...state,
					loading: false,
					error: action.payload,
					otp: {}
				};
		case LOGOUT_SUCCESS:
			return {
				...state,
				logout: action.payload,
				loading: false,
				login: {},
				error: {},
			};

		case FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				forgot_password: action.payload,
				loading: false,
				error: {},
				otp: {}
			};
		case FORGOT_PASSWORD_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				forgot_password: {}
			};
		case RESET_PASSWORD_SUCCESS:
			return {
				...state,
				reset_password: action.payload,
				loading: false,
				error: {},
				forgot_password: {}
			};
		case RESET_PASSWORD_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				reset_password: {}
			};
		default:
			return state;
	}
}