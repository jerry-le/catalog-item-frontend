import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {readCatalogs} from "../../actions/index";
import {readItem} from "../../actions/index";

class ItemDetail extends Component {
    componentDidMount(){
        if (!this.props.catalogs.length) {
            this.props.readCatalogs()
        }
        if (!this.props.items.length){
            const {id} = this.props.match.params;
            this.props.readItem(id);
        }
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
            <div>
                <h3>Create new item</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="link"
                        component={this.renderField.bind(this)}
                        type="text"
                        label="Youtube Link"
                    />

                    <Field
                        label="Description"
                        name="description"
                        type="text"
                        component={this.renderField.bind(this)}
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
            </div>
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
    } else {
        if (values.description.length > 80) {
            errors.description = "Description must be less than 80 characters";
        }
    }
    if (!values.catalog_id) {
        errors.catalog_id = "Select a catalog";
    }

    return errors;
}

function mapStateToProp(state, ownProps) {
    const catalogs = state.catalogs;
    const items = state.items;
    const item = _.find(items, function(item){
        return String(item.id) === String(ownProps.match.params.id);
    }) || {};
    return {
        catalogs: catalogs,
        items: items,
        initialValues: item
    }
}

export default reduxForm({
    validate,
    form: 'ItemDetailForm',
    enableReinitialize : true
})(
    connect(mapStateToProp, {readCatalogs, readItem})(ItemDetail)
);

