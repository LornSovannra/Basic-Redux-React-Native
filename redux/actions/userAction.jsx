import { SET_USER_AGE, SET_USER_NAME } from "../constant/userConstant"

const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
}

const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })
}

export {setName, setAge}