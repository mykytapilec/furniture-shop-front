import {CatalogActionTypes} from "./catalog.actionTypes";

export const fetchDataSuccess = (data: string)=>{
    return({
        type: CatalogActionTypes.FETCH_SUCCESS,
        payload: data
    })
}

export const fetchDataFail = (error: Error)=>{
    return({
        type: CatalogActionTypes.FETCH_FAIL,
        payload: error.message
    })
}
export const startFetchData = (catalogName: string)=>{
    return({
        type: CatalogActionTypes.FETCH_START,
        payload: catalogName
    })
}