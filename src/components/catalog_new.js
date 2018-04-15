import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

class CatalogNew extends Component {
    renderField(field) { // field is object contain all handlers of Field component
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    // JSX syntax to handle all events of input like: onChange, onEnter, ...
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    onSubmit(value) {
        console.log(value);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
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

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    // validate inputs from 'values'
    if (!values.name) {
        errors.name = "Enter a title";
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
})(CatalogNew);
