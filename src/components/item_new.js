import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class ItemNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                ></input>
                {field.meta.error}
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field
                    label="Youtube Link"
                    name="link"
                    type="text"
                    component={this.renderField}
                />

                <Field
                    label="Description"
                    name="description"
                    type="text"
                    component={this.renderField}
                />

                <Field
                    label="Catalog"
                    name="catalog_id"
                    type="text"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>

        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.link) {
        errors.link = "Enter a link";
    }
    if (!values.description) {
        errors.description = "Enter a description";
    }
    if (!values.catalog_id) {
        errors.catalog_id = "Select a catalog";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ItemNewForm'
})(ItemNew);
