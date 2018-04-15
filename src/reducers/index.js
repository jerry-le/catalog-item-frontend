import {combineReducers} from 'redux';
import CatalogsReducer from './reducer_catalog';

const rootReducer = combineReducers({
    catalogs: CatalogsReducer
});

export default rootReducer;