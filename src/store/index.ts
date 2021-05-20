import {all} from 'redux-saga/effects';
import { loginWatcher } from '../modules/authorization/store/loginSaga';
import { reginWatcher } from '../modules/authorization/store/reginSaga';
import { collectionWatcher } from '../modules/catalog/collection/store/collectionSaga';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import loginReducer from '../modules/authorization/store/loginReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {catalogReducer} from '../modules/catalog/store/reducer';
import { catalogWatcher } from '../modules/catalog/mainPage/store/catalogSaga';
import {collectionItemWatcher} from "../modules/catalog/collectionItemPage/store/collectionItemSaga";


function* rootWatcher() {
    yield all([loginWatcher(), reginWatcher(), catalogWatcher(), collectionWatcher(),collectionItemWatcher()]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    loginReducer,
    catalogReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);