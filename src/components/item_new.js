import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {readCatalogs} from "../actions";
import {createItem} from "../actions";

class ItemNew extends Component {
    componentDidMount(){
        this.props.readCatalogs();
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                ></input>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderMultiselect(field) {
        const options = field.data;
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <select className="form-control" {...field.input}>
                    {options.map((option) => {
                        return <option value={option.id} key={option.id}>{option.name}</option>
                    })}
                </select>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createItem(values,
            () => {
                this.props.history.push('/');
            },
            (reason) => {
                console.log(reason);
            });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    data={this.props.catalogs}
                    component={this.renderMultiselect}
                />

                <button type="submit" className="btn btn-primary">Submit
                </button>
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

function mapStateToProp(state) {
    return {catalogs: state.catalogs}
}

export default reduxForm({
    validate,
    form: 'ItemNewForm'
})(
    connect(mapStateToProp, {readCatalogs, createItem})(ItemNew)
);
