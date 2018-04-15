import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemList extends Component {

    renderItem(item) {
        return (
            <li key={item.id} className="list-group-item media">
                <div className="media-left">
                    <img className="media-object" src={item.img}/>
                </div>

                <div className="media-body">
                    <a
                        className="media-heading"
                        href={item.link}
                        target="_blank"
                    >{item.description}</a>
                    <div>{item.created}</div>
                </div>
            </li>
        )
    }

    render() {
        return (
            <ul className="col-xs-12 list-group">
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