import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import StyledLink from 'StyledLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ItemContainer = styled(Flex)`
  height: auto;
  min-width: 0;
  flex: 2;
  @media screen and (min-width: 40em) {
    height: 500px;  
    width: auto;
  }
`;

const ItemBox = styled(Flex)`
  background: ${props => props.theme.colors.categoryItem.background};
  color: ${props => props.theme.colors.categoryItem.color};
  flex: 1;
  min-width: 0;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    width: 5px;
    background: ${props => props.customBorderColor ? props.customBorderColor : '#000' };
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
  }
  @media screen and (min-width: 40em) {
    max-width: 150px;
    &:after {
      content: '';
      width: 100%;
      height: 5px;
      bottom: 0;
      left: 0;
    }
  }
`;

const LowerBar = styled(Box)`
  background: linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(254,254,254,1) 100%);
  max-width: 150px;
`;

const ListItem = styled(StyledLink)`
  margin-bottom: 5px;

  @media screen and (min-width: 40em) {
    margin-bottom: 0;
  }
`;

export default class CategoryItem extends Component {
  render () {
    var { category } = this.props;
    return (
      <ListItem mb={['5px',]} to={'/sector/' + category.id}>
        <ItemContainer flexDirection={['row', 'column']} mr={[0, 15]}>
          <ItemBox customBorderColor={category.color} p={[15, 40]} flexDirection={['row', 'column']} justify={['flex-start', 'center']} alignItems='center'>
            <Box fontSize={['1.5em', '4em']} mb={[0, 10]} mr={[10, 0]}>
              <FontAwesomeIcon icon={category.icon}/>
            </Box>
            {category.name}
          </ItemBox>
          <LowerBar flex={[undefined, '1']}></LowerBar>
        </ItemContainer>
      </ListItem>
    )
  }
}
