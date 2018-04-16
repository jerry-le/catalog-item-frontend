import React from 'react';
import {Link} from 'react-router-dom';

export default function () {
    return (
        <nav className="navbar navbar-default">
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle"
                            data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to='/' className="navbar-brand">Reddupp</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/catalog/new'><span
                            className="glyphicon glyphicon-pencil"></span> New Catalog</Link>
                        </li>
                        <li><Link to='/item/new'><span
                            className="glyphicon glyphicon-pencil"></span> New Item</Link>
                        </li>
                        <li><Link to='/login'><span
                            className="glyphicon glyphicon-log-in"></span> Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}