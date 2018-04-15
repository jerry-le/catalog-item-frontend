import React, {Component} from 'react';
import CatalogSearchBar from '../containers/catalog_search_bar';
import CatalogList from '../containers/catalog_list';
import LayOut from '../components/layout';


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <LayOut/>
                <CatalogSearchBar/>
                <CatalogList/>
            </div>
        );
    }
}
