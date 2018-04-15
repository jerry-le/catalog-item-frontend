import React from 'react';

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
                    <a className="navbar-brand">Reddupp</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a><span
                            className="glyphicon glyphicon-user"></span> Sign Up</a>
                        </li>
                        <li><a><span
                            className="glyphicon glyphicon-log-in"></span> Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}