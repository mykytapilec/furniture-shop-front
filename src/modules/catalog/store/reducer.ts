import { combineReducers } from 'redux';
import { collectionReducer } from '../collection/store/collectionReducer';
import { mainPageReducer } from '../mainPage/store/mainPageReducer';
import {collectionItemReducer} from "../collectionItemPage/store/collectionItemReducer";


export const catalogReducer = combineReducers({
    collectionReducer,
    mainPageReducer,
    collectionItemReducer,
})

