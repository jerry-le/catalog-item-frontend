import {mockItems} from '../mock/index';

export default (state = [], action) => {
    switch (action.type) {
        default:
            state = [];
    }
    state = mockItems();
    return state;
}