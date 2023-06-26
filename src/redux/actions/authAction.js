import axios from "axios";
import { SET_CURRENT_USER,PSMT_OTP_SUCCESS,PSMT_OTP_ERROR, SIGNUP_SUCCESS, SIGNUP_ERRORS, AUTH_LOADING, OTP_ERRORS, OTP_SUCCESS, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR} from '../actions/types';
import store from "../store";
import baseUrl from '../constant/index';
import { apiHeader } from './apiHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
var jwt = require('jwt-simple');
export const setCurrentUser = (userData) => {
    console.log("setCurrentUser called", userData);
    return (
        store.dispatch({
            type: SET_CURRENT_USER,
            payload: userData
        })
    )
}

export const LoginAction = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + "/pidva/login", formData, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: LOGIN_ERROR,
                payload: errors.response.data.message
            })
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.password.message, { theme: "colored" })
            }
        })
}

export const SignUpAction = (formData) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + "/pidva/register", formData, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: SIGNUP_ERRORS,
                payload: errors.response.data.message
            })
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else if(errors.response.data.errorMessage.email_id) {
                toast.error(errors.response.data.errorMessage.email_id.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.countries.message, { theme: "colored" })
            }
        })
}

export const VerifyOTP = (otp) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    console.log("otp", otp);
    axios
        .post(baseUrl() + "/pidva/verify", otp, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: OTP_SUCCESS,
                payload: response
            })
            toast.success(response.data.message, { theme: "colored" })
            if (response.data.type == 2) {
                const encode = jwt.encode(response.data.data, process.env.REACT_APP_PRIVATE_KEY)
                localStorage.setItem("userData", encode)
                const decoded = jwt.decode(encode, process.env.REACT_APP_PRIVATE_KEY)
                dispatch(setCurrentUser(decoded))
            }
        })
        .catch(errors => {
            dispatch({
                type: OTP_ERRORS,
                payload: errors.response.data
            })
            console.log("errors.response.data.message", errors.response.data);
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.otp.message, { theme: "colored" })
            }
        })
}

export const VerifyPsmtOTP = (otp) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    console.log("otp", otp);
    axios
        .post(baseUrl() + "/admin/verify_psmt_otp", otp, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: PSMT_OTP_SUCCESS,
                payload: response
            })
            toast.success(response.data.message, { theme: "colored" })
            if (response.data.type == 2) {
                const encode = jwt.encode(response.data.data, process.env.REACT_APP_PRIVATE_KEY)
                localStorage.setItem("userData", encode)
                const decoded = jwt.decode(encode, process.env.REACT_APP_PRIVATE_KEY)
                dispatch(setCurrentUser(decoded))
            }
        })
        .catch(errors => {
            dispatch({
                type: PSMT_OTP_ERROR,
                payload: errors.response.data
            })
            console.log("errors.response.data.message", errors.response.data);
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.otp.message, { theme: "colored" })
            }
        })
}

export const ForgotPasswordAction = (email) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + '/pidva/forgotPassword', email, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: FORGOT_PASSWORD_ERROR,
                payload: errors.response.data.message
            })
            console.log("ForgotPasswordAction", errors.response.data.message);
            toast.error(errors.response.data.message, { theme: "colored" })
        })
}

export const ResetPasswordAction = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + '/pidva/updateForgotPassword', data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: RESET_PASSWORD_ERROR,
                payload: errors.response.data.message
            })
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.confirm_password.message, { theme: "colored" })
            }
        })
}

export const LogoutAction = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + "/pidva/logout", data, {
            headers: apiHeader()
        })
        .then(response => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: response
            })
            dispatch(setCurrentUser({}))
            localStorage.removeItem("userData")
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            console.log("logout error", errors.response.data.message);
        })
}


export const AdminLoginAction = (formData) => (dispatch) => {
    console.log("AdminLoginAction");
    dispatch({ type: AUTH_LOADING })
    axios
        .post(baseUrl() + "/admin/login", formData, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            })
            toast.success(response.data.message, { theme: "colored" })
            const encode = jwt.encode(response.data.data, process.env.REACT_APP_PRIVATE_KEY)
            localStorage.setItem("userData", encode)
            const decoded = jwt.decode(encode, process.env.REACT_APP_PRIVATE_KEY)
            dispatch(setCurrentUser(decoded))
        })
        .catch(errors => {
            dispatch({
                type: LOGIN_ERROR,
                payload: errors.response.data.message
            })
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.password.message, { theme: "colored" })
            }
        })
}