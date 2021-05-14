import { FETCH_CATALOG } from './keys';

// interface Form {
//     email: String;
//     password: String;
// }

// interface Payload {
//     token: String;
//     userId: String;
// }

// interface Headers {
//     token?: String;
//     userId?: String;
// }


export const fetchCatalog = (url: string, method: string) => {
    console.log(2)
    return {
        type: FETCH_CATALOG,
        url,
        method,
    }
};