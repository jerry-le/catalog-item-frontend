import {LOGIN} from "../actions";


export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload.data;
        default:
            return state
    }
}