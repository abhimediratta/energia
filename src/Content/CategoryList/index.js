import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBurn from '@fortawesome/fontawesome-free-solid/faBurn';

import CategoryItem from './CategoryItem';


fontawesome.library.add(faBurn);

const CategoryListBox = styled(Flex)`
  height: 200px
`;

export default class CategoryList extends Component {
  render () {
    return (
      <CategoryListBox>
        <CategoryItem category="Renewable"></CategoryItem>
        <CategoryItem category="Market"></CategoryItem>
        <CategoryItem category="CERC"></CategoryItem>
      </CategoryListBox>
    )
  }
}
