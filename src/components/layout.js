import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkAccessToken, logOut} from "../actions";

class LayOut extends Component {
    componentDidMount() {
        if (!this.props.userName) {
            this.props.checkAccessToken();
        }
    }

    onClickLogOut() {
        this.props.logOut();
    }

    renderRightInfo() {
        const userName = this.props.userName;
        const userImg = this.props.userImg;

        if (!userName) {
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
                            <img alt="avatar" className="avatar" src={userImg}/>
                            <span className="glyphicon glyphicon-log-out"/>
                            &nbsp;Logout ({userName})
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
    let userName = '';
    let userImg = '';
    try {
        userName = state.user.name;
        userImg = state.user.image_url;
    } catch (e) {
    }

    return {
        userName: userName,
        userImg: userImg
    }
}

export default connect(mapStateToProps, {checkAccessToken, logOut})(LayOut);

