import React, {Component} from 'react';

class CatalogList extends Component {
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
                </tbody>
            </table>
        )
    }
}

export default CatalogList;