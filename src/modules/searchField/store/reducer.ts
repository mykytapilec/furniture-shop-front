import { ActionTypes } from "./actionTypes";


interface SearchResultsInterface {
    results: any[],
};

const INITIAL_STATE: SearchResultsInterface = {
    results : [],
};

export const searchResultsReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_SEARCH_ITEMS_SUCCESS:
            return {
                ...state,
                results: action.payload.searchResult,
            }
        case ActionTypes.FETCH_SEARCH_ITEMS_FAIL:
            return {
                ...state,
                results: [],
                error: action.payload
            }
            
        default:
            return state;
    }
};