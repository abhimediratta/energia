import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList';
import { fetchCategoriesIfNeeded } from '../../Store/Category/duck/actions';


class CategoryItems extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
        <CategoryList categories={categories} />
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


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);  
