import {put, call} from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';

import {CollectionItemActionTypes} from "./actionTypes";
import {fetchCollectionItemFail, fetchCollectionItemSuccess,collectionItemClear} from "./actions";
import {uriForCollection} from "../../constants";


const takeEvery: any = Eff.takeEvery;

function* startFetchCollectionItem({payload}: { payload: string }): any {
    try {
        yield put(collectionItemClear());
        const item = yield call(fetch, `${uriForCollection}${payload}`);
        const data = yield item.json();
        yield put(fetchCollectionItemSuccess(data));

    } catch (error) {
        yield put(fetchCollectionItemFail(error));
    }
}


export function* collectionItemWatcher() {
    yield takeEvery(CollectionItemActionTypes.FETCH_COLLECTION_ITEM_START, startFetchCollectionItem);
}

