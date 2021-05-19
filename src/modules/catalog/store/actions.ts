import {ActionTypes} from './actionTypes';


export const fetchCollectionSuccess = (data: string)=>{
    return({
        type: ActionTypes.FETCH_SUCCESS,
        payload: data
    })
};

export const fetchCollectionFail = (error: Error)=>{
    return({
        type: ActionTypes.FETCH_FAIL,
        payload: error.message
    })
};

export const fetchCollection = (catalogName: string)=>{
    return({
        type: ActionTypes.FETCH_START,
        payload: catalogName
    })
};

export const clearCollection = () =>{
    return({
        type: ActionTypes.CLEAR_DATA
    })
};

export const fetchCatalog = ()=>{
    return({
        type: ActionTypes.FETCH_CATALOG_START,
    })
};

export const fetchCatalogSuccess = (data: string)=>{
    return({
        type: ActionTypes.FETCH_CATALOG_SUCCESS,
        payload: data
    })
};

export const fetchCatalogFail = (error: Error)=>{
    return({
        type: ActionTypes.FETCH_CATALOG_FAIL,
        payload: error.message
    })
};