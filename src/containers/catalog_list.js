import React, {Component} from 'react';
import {connect} from 'react-redux';
import {readCatalogs} from "../actions";

class CatalogList extends Component {
    componentDidMount(){
        this.props.readCatalogs();
    }

    renderCatalog(catalogData) {
        const name = catalogData.name;
        const itemsCount = catalogData.itemsCount;

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{itemsCount}</td>
            </tr>
        )
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
                {this.props.catalogs.map(this.renderCatalog)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {catalogs: state.catalogs};
}

export default connect(mapStateToProps, {readCatalogs})(CatalogList);