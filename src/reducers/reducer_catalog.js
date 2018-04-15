import {fake_catalogs} from '../mock/index';

export default function(state =[], action) {
    switch (action.type) {
        default:
            console.log("Reducers")
    }
    state = fake_catalogs;
    return state;
}