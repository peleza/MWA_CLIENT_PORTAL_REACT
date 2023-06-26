import { TITLE_SUCCESS } from "./types";


export const getTitleAction = (title) => async (dispatch) => {
    dispatch({
        type: TITLE_SUCCESS,
        payload: title
    })
}