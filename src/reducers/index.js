import {combineReducers} from 'redux';
import CatalogsReducer from './reducer_catalog';
import ItemsReducer from './reducer_item';
import ActiveCatalog from './reducer_active_category';
import UserReducer from './reducer_user';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    catalogs: CatalogsReducer,
    items: ItemsReducer,
    activeCatalog: ActiveCatalog,
    user: UserReducer,
    form: formReducer
});

export default rootReducer;