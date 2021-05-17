import {put,call} from 'redux-saga/effects';
import {CatalogActionTypes} from "./catalog.actionTypes";
import {fetchDataFail, fetchDataSuccess} from "./catalog.actions";
import * as Eff from 'redux-saga/effects';
const takeEvery: any = Eff.takeEvery;
const takeLatest: any = Eff.takeLatest;

export function* fetchDataAsync({payload} : {payload: string}): any{
    try{
        const data = yield call(fetch,`/api/${payload}`);
        const response = yield data.json();
        yield put(fetchDataSuccess(response))

    }catch (error) {
        yield put(fetchDataFail(error))
    }
}

export function* startFetchData(){
    yield takeEvery(CatalogActionTypes.FETCH_START, fetchDataAsync);
}