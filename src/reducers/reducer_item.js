import _ from 'lodash';
import {DELETE_ITEM, READ_ITEMS} from "../actions";
import {READ_ITEM} from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case READ_ITEMS:
            return action.payload.data['items'];
        case READ_ITEM:
            return [...state, action.payload.data];
        case DELETE_ITEM:
            let items = _.filter(state, (item) => {
                return item.id !== action.payload.id;
            });
            return items;
        default:
            return state;
    }
}