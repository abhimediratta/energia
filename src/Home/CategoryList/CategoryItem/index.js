import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ItemContainer = styled(Flex)`
  height: 500px;
  min-width: 0;
  flex: 2;
`;

const ItemBox = styled(Flex)`
  background: ${props => props.theme.colors.categoryItem.background};
  color: ${props => props.theme.colors.categoryItem.color};
  flex: 1;
  min-width: 0;
  max-width: 150px;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 5px;
    background: ${props => props.customBorderColor ? props.customBorderColor : '#000' };
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ItemBoxIcon = styled(Box)`
  font-size: 4em;
`;

const LowerBar = styled(Box)`
  flex: 1;
  background: linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(254,254,254,1) 100%);
  max-width: 150px;
`;

export default class CategoryItem extends Component {
  render () {
    var { category } = this.props;
    return (
      <Link to={'/sector/' + category.id}>
        <ItemContainer flexDirection='column' mr={15}>
          <ItemBox customBorderColor={category.color} px={40} py={40} flexDirection='column' justify='center' alignItems='center'>
            <ItemBoxIcon mb={10}>
              <FontAwesomeIcon icon={category.icon}/>
            </ItemBoxIcon>
            {category.name}
          </ItemBox>
          <LowerBar></LowerBar>
        </ItemContainer>
      </Link>
    )
  }
}
