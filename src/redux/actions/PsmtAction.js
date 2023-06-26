import axios from 'axios';
import { AUTH_LOADING,PSMT_OTP_SUCCESS,PSMT_OTP_ERROR,CLIENT_EDIT_SUCCESS,CLIENT_EDIT_ERROR, CLIENT_REGISTER_EMAIL_SUCCESS,CLIENT_REGISTER_EMAIL_ERROR,PSMT_REGISTER_SUCCESS, PSMT_REGISTER_ERROR, CLIENT_REQUEST_LIST_ERROR, CLIENT_UPDATE_SUCCESS, CLIENT_UPDATE_ERROR, CLIENT_REGISTER_SUCCESS, CLIENT_REGISTER_ERROR, CLIENT_REQUEST_LIST_SUCCESS } from './types';
import baseUrl from '../constant/index';
import { apiHeader } from './apiHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {showLoader, hideLoader} from '../../views/components/Loader'
toast.configure();



export const PsmtRegisterAction = (formData) => async (dispatch) => {
    console.log("Called",formData)
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }  
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/register_psmt`, formData, {
            headers: apiHeader(true)
        })
        .then(response => {
            console.log("response is client register", response)
            dispatch({
                type: PSMT_REGISTER_SUCCESS,
                payload: response.data
            })
             toast.success(response.data.message, { theme: "colored" })
          
        })
        .catch(errors => {
            console.log("error is ", errors)
            dispatch({
                type: PSMT_REGISTER_ERROR,
                payload: errors
            })
            toast.error(errors.error.errorMessage.id.message, { theme: "colored" })
            console.log("error is ",errors.error)
        })
}

export const ClientEditAction = (formData) => async (dispatch) => {
    for (const value of formData.values()) {
        console.log("datavalll",value);
      }    
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/client_edit`, formData, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: CLIENT_EDIT_SUCCESS,
                payload: response.data
            })
             toast.success(response.data.message, { theme: "colored" })
            console.log("response is", response)
        })
        .catch(errors => {
            console.log("error is ", errors)
            dispatch({
                type: CLIENT_EDIT_ERROR,
                payload: errors
            })
            toast.error(errors.response.data.message, { theme: "colored" })
            console.log("error is ",errors.response.data)
        })
}




export const ClientSendEmailRegisterAction = (data) => async (dispatch) => {
     console.log("data is ", data )
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/single_email_link`, data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: CLIENT_REGISTER_EMAIL_SUCCESS,
                payload: response.data
            })
             toast.success(response.data.message, { theme: "colored" })
            console.log("response is send email", response)
        })
        .catch(errors => {
            console.log("error is ", errors)
            dispatch({
                type: CLIENT_REGISTER_EMAIL_ERROR,
                payload: errors
            })
            toast.error(errors.response.data.message, { theme: "colored" })
        })
}





