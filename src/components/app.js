import React, {Component} from 'react';
import CatalogSearchBar from './catalog/catalog_search_bar';
import CatalogList from './catalog/catalog_list';
import ItemList from "./item/items_list";


export default class App extends Component {

    render() {
        return (
            <div>
                <div className="col-md-3">
                    <CatalogSearchBar/>
                    <CatalogList/>
                </div>
                <div className="col-md-9">
                    <ItemList/>
                </div>
            </div>
        );
    }
}
