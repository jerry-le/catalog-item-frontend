import {READ_ITEMS} from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case READ_ITEMS:
            return action.payload.data['items'];
        default:
            return state;
    }
}