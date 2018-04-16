import React, {Component} from 'react';
import {connect} from 'react-redux';
import {readItems} from "../actions";

class ItemList extends Component {
    componentDidMount() {
        this.props.readItems();
    }

    renderItem(item) {
        return (
            <li key={item.id} className="list-group-item media">
                <div className="media-left">
                    <img className="media-object" src={item.img} alt={item.description}/>
                </div>

                <div className="media-body">
                    <a
                        className="media-heading"
                        href={item.link}
                        target="_blank"
                    >{item.description}</a>
                    <div>Posted in <b>{item.created}</b> in <b>{item.catalog}</b></div>
                </div>
            </li>
        )
    }

    render() {
        const activeCatalog = this.props.activeCatalog;
        const activeItems = activeCatalog ? activeCatalog.items : this.props.items;
        const header = activeCatalog ? `Items in ${activeCatalog.name}` : "Newest Items";
        return (
            <ul className="col-xs-12 list-group">
                {header}
                {activeItems.map(this.renderItem)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {items: state.items, activeCatalog: state.activeCatalog};
}


export default connect(mapStateToProps, {readItems})(ItemList);