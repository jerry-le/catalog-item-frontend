import React, {Component} from 'react';
import CatalogSearchBar from '../containers/catalog_search_bar';
import CatalogList from '../containers/catalog_list';
import LayOut from '../components/layout';
import ItemList from "../containers/items_list";


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <LayOut/>
                <div className="col-md-3">
                    <CatalogSearchBar/>
                    <CatalogList/>
                </div>
                <div className="col-md-6">
                    <ItemList/>
                </div>
            </div>
        );
    }
}
