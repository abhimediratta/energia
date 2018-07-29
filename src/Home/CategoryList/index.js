import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import CategoryItem from './CategoryItem';


export default class CategoryList extends Component {
  render () {
    let { categories } = this.props;
    return (
      <Flex flex={['1', '0 1 75%']} mt={[3,0]} flexDirection={['column', 'row']}>
        { categories.map((category) => <CategoryItem key={category.id} category={category} />) }
      </Flex>
    )
  }
}
