import {SELECT_CATALOG} from "../actions";

export default function(state = null, action) {
    switch (action.type) {
        case SELECT_CATALOG:
            return action.payload;
        default:
            return state;
    }
}