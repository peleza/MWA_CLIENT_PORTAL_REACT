import { TITLE_SUCCESS } from "../actions/types";

const initialState = {
    title: ''
}
export default function getTitleReducers(state =  initialState, action){
    switch (action.type) {
        case TITLE_SUCCESS:
            return {
                title: action.payload
            }
        default:
            return state;
    }
}