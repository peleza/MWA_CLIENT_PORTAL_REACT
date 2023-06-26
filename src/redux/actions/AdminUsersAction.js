import axios from 'axios';
import { USERLIST_SUCCESS, AUTH_LOADING, USER_DETAIL_SUCCESS, USER_VERIFICATION_SUCCESS } from './types';
import baseUrl from '../constant/index';
import { apiHeader } from './apiHeader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const GetUserListAction = (Data) => (dispatch) => {
    dispatch({ type: AUTH_LOADING })
    axios
        .post(`${baseUrl()}/admin/customer_list`, Data, {
            headers: apiHeader(true)
        })
        .then(response => {
            dispatch({
                type: USERLIST_SUCCESS,
                payload: response
            })
        })
        .catch(errors => {
            console.log("user list error", errors);
        })
}

export const UserDetailAction = (id) => (dispatch) => {
    dispatch({type: AUTH_LOADING})
    axios
    .post(`${baseUrl()}/admin/customer_detail`, id, {
        headers: apiHeader(true)
    })
    .then(response => {
        dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: response.data
        })
    })
    .catch(errors => {
        console.log("user Detail error", errors);
    })
}

export const AcceptRejectAction = (data) => (dispatch) => {
    dispatch({type: AUTH_LOADING})
    console.log("AcceptRejectAction", data);
    axios
    .post(`${baseUrl()}/admin/verification`, data, {
        headers: apiHeader()
    })
    .then(response => {
        dispatch({
            type: USER_VERIFICATION_SUCCESS,
            payload: response.data
        })
        console.log("AcceptRejectAction response", response);
        toast.success(response.data.message, { theme: "colored" })
    })
    .catch(errors => {
        console.log("user Detail error", errors);
    })
}