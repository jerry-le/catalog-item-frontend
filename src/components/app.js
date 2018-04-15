import React, {Component} from 'react';
import CatalogSearchBar from '../containers/catalog_search_bar';
import CatalogList from '../containers/catalog_list';

export default class App extends Component {

    render() {
        return (
            <div>
                <CatalogSearchBar/>
                <CatalogList/>
            </div>
        );
    }
}
