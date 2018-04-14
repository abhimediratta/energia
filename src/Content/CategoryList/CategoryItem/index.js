import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ItemBox = styled(Flex)`
  background: ${props => props.theme.colors.categoryItem.background};
  color: ${props => props.theme.colors.categoryItem.color};
`;

export default class CategoryItem extends Component {
  render () {
    var { category } = this.props;
    return (
      <ItemBox mr={10} px={10} flexDirection='column' justify='center' alignItems='center'>
        <FontAwesomeIcon icon="burn"/>
        {category}
      </ItemBox>
    )
  }
}
