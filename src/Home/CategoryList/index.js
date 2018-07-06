import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import CategoryItem from './CategoryItem';


export default class CategoryList extends Component {
  render () {
    let { categories } = this.props;
    return (
      <Flex flex='0 1 75%'>
        { categories.map((category) => <CategoryItem key={category.id} category={category} />) }
      </Flex>
    )
  }
}
