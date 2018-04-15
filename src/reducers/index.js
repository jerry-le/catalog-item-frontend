import {combineReducers} from 'redux';
import CatalogReducer from './reducer_catalog';

const rootReducer = combineReducers({
    catalogs: CatalogReducer
});

export default rootReducer;