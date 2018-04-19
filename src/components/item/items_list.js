import React, {Component} from 'react';
import {connect} from 'react-redux';
import {readItems} from "../../actions/index";
import {deleteItem} from "../../actions/index";
import Item from './item';

class ItemList extends Component {
    componentDidMount() {
        this.props.readItems();
    }

    render() {
        const activeCatalog = this.props.activeCatalog;
        const activeItems = activeCatalog ? activeCatalog.items : this.props.items;
        const header = activeCatalog ? `Items in ${activeCatalog.name}` : "Newest Items";
        return (
            <ul className="col-xs-12 list-group">
                <div className="row">
                    <h5 className="col-md-6 text-left">{header}</h5>
                </div>
                {activeItems.map((item) => {
                    return <Item key={item.id} item={item}/>
                })}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {items: state.items, activeCatalog: state.activeCatalog};
}


export default connect(mapStateToProps, {readItems, deleteItem})(ItemList);