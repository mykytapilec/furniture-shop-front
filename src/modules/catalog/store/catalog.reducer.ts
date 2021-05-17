import {CatalogActionTypes} from "./catalog.actionTypes";

interface CatalogInterface {
    items: CatalogItem[],
    error: string
}

export interface CatalogItem{
    price: number,
    title: string,
    url: string,
    description: string,
    id: number
}

const INITIAL_STATE: CatalogInterface = {
    items : [],
    error: ''
}

export const catalogReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CatalogActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: ""

            }
        case CatalogActionTypes.FETCH_FAIL:
            return {
                ...state,
                items: [],
                error: action.payload
            }

        default:
            return state

    }

}