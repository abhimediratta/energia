import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ItemBox = styled(Flex)`
  background: ${props => props.theme.colors.categoryItem.background};
  color: ${props => props.theme.colors.categoryItem.color};
  flex: 1;
  min-width: 0;
`;

const ItemBoxIcon = styled(Box)`
  font-size: 4em;
`;

export default class CategoryItem extends Component {
  render () {
    var { category } = this.props;
    return (
      <ItemBox mr={10} px={30} py={40} flexDirection='column' justify='center' alignItems='center'>
        <ItemBoxIcon mb={10}>
          <FontAwesomeIcon icon="burn"/>
        </ItemBoxIcon>
        {category}
      </ItemBox>
    )
  }
}
