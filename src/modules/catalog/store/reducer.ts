import { combineReducers } from 'redux';
import { collectionReducer } from '../collection/store/collectionReducer';
import { mainPageReducer } from '../mainPage/store/mainPageReducer';


export const catalogReducer = combineReducers({
    collectionReducer,
    mainPageReducer
})

