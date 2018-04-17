import {READ_ITEMS} from "../actions";
import {READ_ITEM} from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case READ_ITEMS:
            return action.payload.data['items'];
        case READ_ITEM:
            return [...state, action.payload.data]
        default:
            return state;
    }
}