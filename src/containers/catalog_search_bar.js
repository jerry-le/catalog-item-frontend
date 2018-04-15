import React, {Component} from 'react';

class CatalogSearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Find catalog name"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit"
                            className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

export default CatalogSearchBar;
