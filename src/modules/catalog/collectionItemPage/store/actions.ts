import {CollectionItemActionTypes} from "./actionTypes";


export const fetchCollectionItem = (path: string) => {
    return ({
        type: CollectionItemActionTypes.FETCH_COLLECTION_ITEM_START,
        payload: path
    })
};


export const fetchCollectionItemSuccess = (collectionItemData: string) => {
    return ({
        type: CollectionItemActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
        payload: collectionItemData
    })
};


export const fetchCollectionItemFail = (error: Error) => {
    return({
        type: CollectionItemActionTypes.FETCH_COLLECTION_ITEM_FAIL,
        payload: error.message
    })
};


export const collectionItemClear = () =>{
    return({
        type: CollectionItemActionTypes.CLEAR_COLLECTION_ITEM_DATA,
    })
}