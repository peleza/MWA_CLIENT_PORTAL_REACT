import axios from 'axios';
import { AUTH_LOADING, COUNTRYACTIVEINACTIVE_SUCCESS, COUNTRYADD_ERROR, COUNTRYADD_SUCCESS, COUNTRYEDIT_SUCCESS, COUNTRYLIST_SUCCESS } from './types';
import baseUrl from '../constant/index';
import { apiHeader } from './apiHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const GetCountryListAction = (Data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/country_list`, Data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: COUNTRYLIST_SUCCESS,
                payload: response.data
            })
            console.log("COUNTRYLIST_SUCCESS");
            console.log("country list response is ");

        })
        .catch(errors => {
            console.log("COUNTRYLIST error", errors);
        })
}

export const EditCountryAction = (id) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .put(`${baseUrl()}/admin/edit_country`, id, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: COUNTRYEDIT_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            console.log("user list error", errors);
        })
}

export const AddCountryAction = (data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/add_country`, data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: COUNTRYADD_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            dispatch({
                type: COUNTRYADD_ERROR,
                payload: errors.response.data.message
            })
            console.log("add country error", errors);
            if (errors.response.data.message !== undefined) {
                toast.error(errors.response.data.message, { theme: "colored" })
            } else {
                toast.error(errors.response.data.errorMessage.country_color.message, { theme: "colored" })
            }
        })
}

export const ActiveInactiveCountryAction = (id) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .put(`${baseUrl()}/admin/change_country_status`, id, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: COUNTRYACTIVEINACTIVE_SUCCESS,
                payload: response.data
            })
            toast.success(response.data.message, { theme: "colored" })
        })
        .catch(errors => {
            console.log("change_country_status", errors);
        })
}