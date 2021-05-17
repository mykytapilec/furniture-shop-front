import { FETCH_CATALOG } from './keys';
import {takeEvery, call} from 'redux-saga/effects';
// import { setLogin, error } from './actions';


interface Params {
    url: string;
    method: string;
    name: string;
    headers: any;
}

const fetchCatalogFromApi = (params: Params) => {
    console.log(4)
    let {url, method} = params;
    // if(name){
    //     name = JSON.stringify(name);
    //     console.log(name)
    //     headers['Content-Type'] = 'application/json';
    // }
    return fetch(url, {method});
}


function* fetchCatalogWorker(args: any): any {
    console.log(3)
    const data = yield call(fetchCatalogFromApi, args);
    console.log(5)
    const json = yield call(() => new Promise(res => res(data.json())));

    console.log(json)
    // if(json.message){
    //     yield put(error(json));
    // } else {
    //     yield put(setLogin(json));
    // }  
}

export function* catalogWatcher() {
    yield takeEvery(FETCH_CATALOG, fetchCatalogWorker);
}