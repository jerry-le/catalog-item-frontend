import axios from 'axios';

export const READ_CATALOGS = 'READ_CATALOGS';
export const READ_CATALOGS_BY_NAME = 'READ_CATALOGS_BY_NAME';
export const CREATE_CATALOG = 'CREATE_CATALOG';
export const SELECT_CATALOG = 'SELECT_CATALOG';
export const READ_ITEMS = 'READ_ITEMS';
export const READ_ITEM = 'READ_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const VERIFY_ACCESS_TOKEN = 'VERIFY_ACCESS_TOKEN';

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

export function createCatalog(values, resolve, reject) {
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

export function createItem(values, resolve, reject) {
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

export function selectCategory(category) {
    return {
        type: SELECT_CATALOG,
        payload: category
    }
}

export async function requestLogin(gapiRespone, resolve, reject) {
    let user_info = {};
    try {
        const response = await axios.post(`${LOGIN_URL}`, gapiRespone);
        const access_token = response.data['access_token'];
        user_info = response.data['user'];

        if (access_token) {
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user_name', user_info['name']);
            localStorage.setItem('user_img', user_info['image_url']);
        }
        resolve();
    } catch (e) {
        reject();
    }

    return {
        type: LOGIN,
        payload: user_info
    }
}

export async function checkAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    const headers = {
        'Authorization': `JWT ${accessToken}`
    };
    let user_name = '';
    try {
        const request = await axios.get(LOGIN_URL, {headers: headers});
        user_name = localStorage.getItem('user_name');
    } catch (e) {
    }
    return {
        type: VERIFY_ACCESS_TOKEN,
        payload: {
            user_name: user_name,
            user_img: localStorage.getItem('user_img')
        }
    }
}

export function logOut() {
    localStorage.removeItem('access_token');
    return {
        type: LOGOUT,
        payload: {}
    }
}