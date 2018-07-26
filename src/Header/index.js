import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MobileMenuIcon from './MobileMenuIcon';
import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMobileMenu';


const HeaderBar = styled(Flex)`
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  position: relative;
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
      <Box>
        <HeaderBar px={[20, 30, 30, 30]} justify='center'>
          <Flex width={[1,1,1,3/4]} alignItems='center'>
            <HomeLink to="/">
              Header
            </HomeLink>

            <MobileMenuIcon />
            <HeaderMenu />
          </Flex>
        </HeaderBar>
        <HeaderMobileMenu />
      </Box>
    )
  }
}
