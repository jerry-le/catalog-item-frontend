import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createCatalog} from '../../actions/index';
import {SubmissionError} from "redux-form";

class CatalogNew extends Component {
    renderField(field) { // field is object contain all handlers of Field component
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // JSX syntax to handle all events of input like: onChange, onEnter, ...
                    {...field.input}
                />
                {/*{field.meta.error}*/}
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        return this.props.createCatalog(values,
            () => {
                this.props.history.push('/');
            },
            (reason) => {
                throw new SubmissionError({_error: reason.response.data.message})
            });
    }

    render() {
        const {error, handleSubmit} = this.props;
        return (
            <div>
                <h3>Create new catalog</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {/* Field is an abstract component of ReduxForm. It cannot do anything without
                    without ReduxForm. Field helps us handling events */}
                    <Field
                        label="Name"
                        name="name"
                        component={this.renderField} /* Field need component to tell ReduxForm
                    how to render itself on screen */
                    />

                    <Field
                        label="Description"
                        name="description"
                        component={this.renderField}
                    />

                    {error && <strong>{error}</strong>}

                    <button type="submit" className="btn btn-primary">Submit
                    </button>
                    <Link to='/' className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    // validate inputs from 'values'
    if (!values.name) {
        errors.name = "Enter a title";
    } else {
        if (values.name.length >  20) {
            errors.name = "Catalog name must be less than 20 characters";
        }
    }

    if (!values.description) {
        errors.description = "Enter a description";
    }

    // if errors is empty, the form is fine to submit
    // if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'CatalogNewForm'
})(
    connect(null, {createCatalog})(CatalogNew),
);
