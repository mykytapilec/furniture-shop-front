import {put, call} from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';

import {CatalogActionTypes} from './actionTypes';
import {fetchCatalogSuccess, fetchCatalogFail} from './actions';
import {uriForCatalog} from '../../constants';


const takeEvery: any = Eff.takeEvery;

export function* catalogWorker(): any {
    try {
        const data = yield call(fetch, uriForCatalog);
        const response = yield data.json();
        yield put(fetchCatalogSuccess(response));
    } catch (error) {
        yield put(fetchCatalogFail(error));
    }
};

export function* catalogWatcher() {
    yield takeEvery(CatalogActionTypes.FETCH_CATALOG_START, catalogWorker);
};