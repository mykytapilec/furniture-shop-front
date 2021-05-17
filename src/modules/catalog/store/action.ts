import {ActionTypes} from "./actionTypes";

export const fetchDataSuccess = (data: string)=>{
    return({
        type: ActionTypes.FETCH_SUCCESS,
        payload: data
    })
}

export const fetchDataFail = (error: Error)=>{
    return({
        type: ActionTypes.FETCH_FAIL,
        payload: error.message
    })
}
export const startFetchData = (catalogName: string)=>{
    return({
        type: ActionTypes.FETCH_START,
        payload: catalogName
    })
}

export const clearData = () =>{
    return({
        type: ActionTypes.CLEAR_DATA
    })
}