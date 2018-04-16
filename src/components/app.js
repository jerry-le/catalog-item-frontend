import React, {Component} from 'react';
import CatalogSearchBar from '../containers/catalog_search_bar';
import CatalogList from '../containers/catalog_list';
import ItemList from "../containers/items_list";


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
