import {put, call} from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import {ActionTypes} from "./actionTypes";
import {fetchDataFail, fetchDataSuccess, clearData} from "./action";
import {dataUri} from "../constants";


const takeEvery: any = Eff.takeEvery;
// const takeLatest: any = Eff.takeLatest;

export function* fetchDataAsync({payload}: { payload: string }): any {
    try {
        yield put(clearData());
        const data = yield call(fetch, `${dataUri}/${payload}`);
        const response = yield data.json();
        yield put(fetchDataSuccess(response));

    } catch (error) {
        yield put(fetchDataFail(error));
    }
};

export function* startFetchData() {
    yield takeEvery(ActionTypes.FETCH_START, fetchDataAsync);
};