import {CollectionActionTypes} from './actionTypes';


export const fetchCollectionSuccess = (data: string)=>{
    return({
        type: CollectionActionTypes.FETCH_SUCCESS,
        payload: data
    })
};

export const fetchCollectionFail = (error: Error)=>{
    return({
        type: CollectionActionTypes.FETCH_FAIL,
        payload: error.message
    })
};

export const fetchCollection = (catalogName: string)=>{
    return({
        type: CollectionActionTypes.FETCH_START,
        payload: catalogName
    })
};

export const clearCollection = () =>{
    return({
        type: CollectionActionTypes.CLEAR_DATA
    })
};