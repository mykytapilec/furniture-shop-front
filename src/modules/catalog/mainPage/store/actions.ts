import {CatalogActionTypes} from './actionTypes';


export const fetchCatalog = ()=>{
    return({
        type: CatalogActionTypes.FETCH_CATALOG_START,
    })
};

export const fetchCatalogSuccess = (data: string)=>{
    return({
        type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
        payload: data
    })
};

export const fetchCatalogFail = (error: Error)=>{
    return({
        type: CatalogActionTypes.FETCH_CATALOG_FAIL,
        payload: error.message
    })
};