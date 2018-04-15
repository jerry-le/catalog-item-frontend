import {combineReducers} from 'redux';
import CatalogsReducer from './reducer_catalog';
import ItemsReducer from './reducer_item';

const rootReducer = combineReducers({
    catalogs: CatalogsReducer,
    items: ItemsReducer
});

export default rootReducer;