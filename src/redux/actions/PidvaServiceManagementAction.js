import axios from 'axios';
import { AUTH_LOADING, SERVICEACTIVEINACTIVE_SUCCESS, SERVICEADD_ERROR, SERVICEADD_SUCCESS, SERVICEEDIT_SUCCESS, SERVICELIST_SUCCESS, } from './types';
import baseUrl from '../constant/index';
import { apiHeader } from './apiHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const GetServiceListAction = (Data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/${Data.apiUrl}`, Data , {
            headers: apiHeader()
        })
        .then(response => {
            dispatch({
                type: SERVICELIST_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            console.log("service list error", errors);
        })
}

export const AddServiceAction = (Data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/${Data.apiUrl}`, Data.data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: SERVICEADD_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: SERVICEADD_ERROR,
                payload: errors.response.data.message
            })
            console.log("add country error", errors);
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.service_code.message, { theme: "colored" })
            }
        })
}

export const ActiveInactiveServiceAction = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .put(`${baseUrl()}/admin/${data.apiUrl}`, data.data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: SERVICEACTIVEINACTIVE_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            console.log("change_service_status", errors);
        })
}

export const EditServiceAction = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .put(`${baseUrl()}/admin/${data.apiUrl}`, data.data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: SERVICEEDIT_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            console.log("edit_service", errors);
        })
}