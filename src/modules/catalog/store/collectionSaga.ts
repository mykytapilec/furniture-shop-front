import {put, call} from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import {ActionTypes} from "./actionTypes";
import {fetchCollectionFail, fetchCollectionSuccess, clearCollection} from "./actions";
import {uriForCollection} from "../constants";


const takeEvery: any = Eff.takeEvery;
// const takeLatest: any = Eff.takeLatest;

export function* collectionWorker({payload}: { payload: string }): any {
    try {
        yield put(clearCollection());
        const data = yield call(fetch, `${uriForCollection}/${payload}`);
        const response = yield data.json();
        yield put(fetchCollectionSuccess(response));

    } catch (error) {
        yield put(fetchCollectionFail(error));
    }
};

export function* collectionWatcher() {
    yield takeEvery(ActionTypes.FETCH_START, collectionWorker);
};