import {LOGIN} from "../actions";
import {VERIFY_ACCESS_TOKEN} from "../actions";
import {LOGOUT} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case VERIFY_ACCESS_TOKEN:
        case LOGOUT:
            return action.payload;
        default:
            return state
    }
}