import { SET_USER_AGE, SET_USER_NAME } from "../constant/userConstant";
import { userStates } from "../states/userState";

export default function userReducer(state = userStates, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state, name: action.payload
            }
        case SET_USER_AGE:
            return {
                ...state, age: action.payload
            }
        default:
            return state;
    }
}