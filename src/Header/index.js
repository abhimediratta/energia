import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';
import SectorsDropdown from './SectorsDropdown';

const HeaderBar = styled(Flex)`
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default class Header extends Component {
  render () {
    return (
      <HeaderBar pl={30} justify='center'>
        <Flex width={[1,1,1,3/4]} alignItems='center'>
          <HomeLink to="/">
            Header
          </HomeLink>

          <Flex alignItems='center' ml={40}>
            <SectorsDropdown></SectorsDropdown>
            <NavItem to="/events" text={'Events Calendar'}></NavItem>
            <NavItem to="/test" text={'About Us'}></NavItem>
            <NavItem to="/test" text={'Contact Us'}></NavItem>
          </Flex>
        </Flex>
      </HeaderBar>
    )
  }
}
