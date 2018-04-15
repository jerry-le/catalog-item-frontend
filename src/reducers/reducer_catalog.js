import {READ_CATALOGS} from "../actions";

export default (state =[], action) => {
    switch (action.type) {
        case READ_CATALOGS:
            state = action.payload.data['catalogs'];
            break;
        default:
            state = [];
    }
    return state;
}