import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import fontawesome from '@fortawesome/fontawesome';
import faBurn from '@fortawesome/fontawesome-free-solid/faBurn';

import CategoryItem from './CategoryItem';


fontawesome.library.add(faBurn);


export default class CategoryList extends Component {
  render () {
    return (
      <Flex flex='0 1 75%'>
        <CategoryItem customBorderColor="red" category="Renewable"></CategoryItem>
        <CategoryItem category="Market"></CategoryItem>
        <CategoryItem category="CERC"></CategoryItem>
        <CategoryItem category="CERC"></CategoryItem>
        <CategoryItem category="WREB"></CategoryItem>
        <CategoryItem category="Test"></CategoryItem>
      </Flex>
    )
  }
}
