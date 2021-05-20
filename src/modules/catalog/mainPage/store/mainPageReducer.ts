import { CatalogActionTypes } from "./actionTypes";

interface MainPageInterface {
    images: string[],
    titles: string[],
};

const INITIAL_STATE: MainPageInterface = {
    images : [],
    titles: [],
};

export const mainPageReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
            return {
                ...state,
                images: action.payload.urls,
                titles: action.payload.titles,
            }
        case CatalogActionTypes.FETCH_CATALOG_FAIL:
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