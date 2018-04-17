import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import LayOut from './components/layout';
import CatalogNew from './components/catalog_new'
import ItemNew from './components/item_new';
import ItemDetail from "./components/item_detail";
import Login from './components/login';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
                <LayOut/>
                <Switch>
                    <Route path='/catalog/new' component={CatalogNew}/>
                    <Route path='/item/new' component={ItemNew}/>
                    <Route path='/item/:id' component={ItemDetail}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));