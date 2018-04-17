import {READ_CATALOGS} from "../actions";
import {READ_CATALOGS_BY_NAME} from "../actions";

export default (state =[], action) => {
    switch (action.type) {
        case READ_CATALOGS:
            return action.payload.data['catalogs'];
        case READ_CATALOGS_BY_NAME:
            return action.payload.data['catalogs'];
        default:
            return state;
    }
}