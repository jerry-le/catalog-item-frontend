import axios from 'axios';

export const READ_CATALOGS = 'READ_CATALOGS';

const ROOT_URL = `http://localhost:5000/api`;
const CATALOG_URL = `${ROOT_URL}/catalog`;
const CATALOGS_URL = `${ROOT_URL}/catalogs`;

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
