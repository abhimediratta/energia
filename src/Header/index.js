import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import NavItem from './NavItem';
import NavDropdown from './NavDropdown';

const HeaderBar = styled(Flex)`
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
`;

export default class Header extends Component {
  render () {
    return (
      <HeaderBar pl={30} justify='center'>
        <Flex width={[1,1,1,3/4]} alignItems='center'>
          Header

          <Flex alignItems='center' ml={40}>
            <NavDropdown text={'Sectors'} />
            <NavItem text={'Events Calendar'}></NavItem>
            <NavItem text={'About Us'}></NavItem>
            <NavItem text={'Contact Us'}></NavItem>
          </Flex>
        </Flex>
      </HeaderBar>
    )
  }
}
