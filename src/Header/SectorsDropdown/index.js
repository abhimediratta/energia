import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import NavDropdown from '../NavDropdown';
import { fetchCategoriesIfNeeded } from '../../Store/Category/duck/actions';


class SectorsDropdown extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;
        return (
            <NavDropdown text={'Sectors'} list={categories} />
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.category.categories
    }
};

const mapDispatchToProps = dispatch => ({
    getCategories: () => {
        dispatch(fetchCategoriesIfNeeded())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SectorsDropdown);  
