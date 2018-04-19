import React, {Component} from 'react';
import {connect} from 'react-redux';
import {readCatalogs} from "../../actions/index";
import {selectCategory} from "../../actions/index";

class CatalogList extends Component {
    componentDidMount(){
        this.props.readCatalogs();
    }

    renderCatalog(catalogData) {
        return this.props.catalogs.map((catalog) => {
            const name = catalog.name;
            const itemsCount = catalog.itemsCount;

            return (
                <tr
                    key={name}
                    onClick={() => this.props.selectCategory(catalog)}
                >
                    <td>{name}</td>
                    <td>{itemsCount}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Items count</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderCatalog()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {catalogs: state.catalogs};
}

export default connect(mapStateToProps, {readCatalogs, selectCategory})(CatalogList);