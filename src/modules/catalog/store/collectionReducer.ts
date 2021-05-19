import {ActionTypes} from './actionTypes';


interface CatalogInterface {
    items: CatalogItem[],
    title: string,
    error: string
};

export interface CatalogItem{
    price: number,
    title: string,
    url: string,
    description: string,
    id: number
};

const INITIAL_STATE: CatalogInterface = {
    items : [],
    title: '',
    error: ''
};

export const collectionReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                title: action.payload.title,
                error: ''

            }
        case ActionTypes.CLEAR_DATA:
            return {
                ...state,
                items: [],
                title: "",
                error: ""
            }
        case ActionTypes.FETCH_FAIL:
            return {
                ...state,
                items: [],
                title: '',
                error: action.payload
            }
            
        default:
            return state;

    }
};