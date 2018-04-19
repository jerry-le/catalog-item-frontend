import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkAccessToken, logOut} from "../actions";

class LayOut extends Component {
    componentDidMount() {
        if (!this.props.user_name) {
            this.props.checkAccessToken();
        }
    }

    onClickLogOut() {
        this.props.logOut();
    }

    renderRightInfo() {
        const user_name = this.props.user_name;
        const user_img = this.props.user_img;

        if (!user_name) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to='/login'>
                            <span className="glyphicon glyphicon-log-in"/>
                            &nbsp;Login
                        </Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to='/catalog/new'>
                            <span className="glyphicon glyphicon-pencil"/>
                            &nbsp;New Catalog
                        </Link>
                    </li>
                    <li>
                        <Link to='/item/new'>
                            <span className="glyphicon glyphicon-pencil"/>
                            &nbsp;New Item
                        </Link>
                    </li>
                    <li>
                        <a onClick={this.onClickLogOut.bind(this)}>
                            <img className="avatar" src={user_img}/>
                            <span className="glyphicon glyphicon-log-out"/>
                            &nbsp;Logout ({user_name})
                        </a>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle"
                                data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link to='/' className="navbar-brand">Reddupp</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        {this.renderRightInfo.apply(this, null)}
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    let user_name = '';
    let user_img = '';
    try {
        user_name = state.user.name;
        user_img = state.user.image_url;
    } catch (e) {
    }

    return {
        user_name: user_name,
        user_img: user_img
    }
}

export default connect(mapStateToProps, {checkAccessToken, logOut})(LayOut);

