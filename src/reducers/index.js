import {combineReducers} from 'redux';
import CatalogsReducer from './reducer_catalog';
import ItemsReducer from './reducer_item';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    catalogs: CatalogsReducer,
    items: ItemsReducer,
    form: formReducer
});

export default rootReducer;