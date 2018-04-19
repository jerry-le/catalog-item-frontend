import React, {Component} from 'react';
import {readCatalogsByName} from "../../actions/index";
import {connect} from 'react-redux';

class CatalogSearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.readCatalogsByName(this.state.term);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input
                    placeholder="Find catalog name"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
            </form>
        )
    }
}

export default connect(null, {readCatalogsByName})(CatalogSearchBar);
