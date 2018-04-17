import axios from 'axios';

export const READ_CATALOGS = 'READ_CATALOGS';
export const READ_CATALOGS_BY_NAME = 'READ_CATALOGS_BY_NAME';
export const CREATE_CATALOG = 'CREATE_CATALOG';
export const SELECT_CATALOG = 'SELECT_CATALOG';
export const READ_ITEMS = 'READ_ITEMS';
export const READ_ITEM = 'READ_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const LOGIN = 'LOGIN';

const ROOT_URL = `http://localhost:5000/api`;
const CATALOGS_URL = `${ROOT_URL}/catalogs`;
const CATALOG_URL = `${ROOT_URL}/catalog`;
const ITEMS_URL = `${ROOT_URL}/items`;
const ITEM_URL = `${ROOT_URL}/item`;
const LOGIN_URL = `${ROOT_URL}/login`;

const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export function readCatalogs() {
    const request = axios.get(CATALOGS_URL, config);

    return {
        type: READ_CATALOGS,
        payload: request
    }
}

export function readCatalogsByName(name) {
    const request = axios.get(`${CATALOGS_URL}?name=${name}`, config);

    return {
        type: READ_CATALOGS_BY_NAME,
        payload: request
    }

}

export function readItems() {
    const request = axios.get(ITEMS_URL, config);

    return {
        type: READ_ITEMS,
        payload: request
    }
}

export function readItem(id) {
    const request = axios.get(`${ITEM_URL}/${id}`, config);

    return {
        type: READ_ITEM,
        payload: request
    }
}

export function createCatalog(values, resolve, reject){
    const request = axios.post(`${CATALOG_URL}`, values)
        .then(() => resolve())
        .catch((reason) => {
            reject(reason)
        });

    return {
        type: CREATE_CATALOG,
        payload: request
    }
}

export function createItem(values, resolve, reject){
    const request = axios.post(`${ITEM_URL}`, values)
        .then(() => resolve())
        .catch((reason => {
            reject(reason);
        }));
    return {
        type: CREATE_ITEM,
        payload: request
    }
}

export function selectCategory(category){
    return {
        type: SELECT_CATALOG,
        payload: category
    }
}

export function requestLogin(gapiRespone, resolve, reject) {
    const request = axios.post(`${LOGIN_URL}`, gapiRespone)
        .then((data) => {
            resolve(data)
        })
        .catch((reason) => {
            reject(reason);
        });

    return {
        type: LOGIN,
        payload: request
    }
}