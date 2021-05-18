import { combineReducers } from 'redux';
import { collectionReducer } from './collectionReducer';
import { mainPageReducer } from './mainPageReducer';


export const catalogReducer = combineReducers({
    collectionReducer,
    mainPageReducer
})