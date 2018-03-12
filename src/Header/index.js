import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import NavItem from './NavItem';

const HeaderBar = styled(Flex)`
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
`;

export default class Header extends Component {
  render () {
    return (
      <HeaderBar py={20} justify='center'>
        <Flex width={3/4}>
          Header

          <Box ml={40}>
            <NavItem text={'Events Calendar'}></NavItem>
            <NavItem text={'About Us'}></NavItem>
            <NavItem text={'Contact Us'}></NavItem>
          </Box>
        </Flex>
      </HeaderBar>
    )
  }
}
