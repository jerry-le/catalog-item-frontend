import axios from 'axios';

export const READ_CATALOGS = 'READ_CATALOGS';
export const CREATE_CATALOG = 'CREATE_CATALOG';
export const READ_ITEMS = 'READ_ITEMS';

const ROOT_URL = `http://localhost:5000/api`;
const CATALOGS_URL = `${ROOT_URL}/catalogs`;
const CATALOG_URL = `${ROOT_URL}/catalog`;
const ITEMS_URL = `${ROOT_URL}/items`;

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

export function readItems() {
    const request = axios.get(ITEMS_URL, config);

    return {
        type: READ_ITEMS,
        payload: request
    }
}

export function createCatalog(values, resolve, reject){
    const request = axios.post(`${CATALOG_URL}`, values)
        .then(() => resolve())
        .catch((reason) => {
            console.log(reason);
            reject(reason)
        });

    return {
        type: CREATE_CATALOG,
        payload: request
    }
}

