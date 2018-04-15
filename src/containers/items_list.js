import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemList extends Component {

    renderItem(item) {
        return (
            <li className="list-group-item">
                <div>{item.link}</div>
                <div>{item.description}</div>
            </li>
        )
    }

    render() {
        return (
            <ul className="list-group">
                Item Lists
                {this.props.items.map(this.renderItem)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {items: state.items};
}


export default connect(mapStateToProps)(ItemList);