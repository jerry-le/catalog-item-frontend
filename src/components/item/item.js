import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteItem, readCatalogs} from "../../actions";

class Item extends Component {
    onClickDelete(item) {
        this.props.deleteItem(item, () => {
            this.props.readCatalogs();
        });
    }

    renderModifyButtons(item) {
        if (localStorage.getItem('access_token')) {
            return (
                <div>
                <span className="edit-item">
                    <Link to={`item/${item.id}`}>Edit</Link>
                </span>
                    <span className="edit-item" onClick={() => this.onClickDelete(item)}> Delete</span>
                </div>
            )
        }
    }

    render() {
        const item = this.props.item;
        return (
            <li className="list-group-item media">
                <div className="media-left">
                    <img className="media-object" src={item.img}
                         alt={item.description}/>
                </div>

                <div className="media-body">
                    <a
                        className="media-heading"
                        href={item.link}
                        target="_blank"
                    >{item.description}</a>
                    <div>Posted in <b>{item.created}</b> in <b>{item.catalog}</b></div>
                    {this.renderModifyButtons(item)}
                </div>
            </li>
        )
    }
}

export default connect(null, {deleteItem, readCatalogs})(Item);