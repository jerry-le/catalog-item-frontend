import {READ_CATALOGS} from "../actions";

export default (state =[], action) => {
    switch (action.type) {
        case READ_CATALOGS:
            return action.payload.data['catalogs'];
        default:
            return state;
    }
}