import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import NavItem from '../NavItem';
import SectorsDropdown from '../SectorsDropdown';

const HeaderMenuMobileContainer = styled(Flex)`
  position: absolute;
  flex-direction: column;
  align-items: stretch;
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  right: 0;

  @media screen and (min-width: 40em) {
    display: none;
  }
`;

export default class HeaderMobileMenu extends Component {
  render () {
    return (
      <HeaderMenuMobileContainer flexWrap="wrap" alignItems='center' ml={[0, 40, 40, 40]}>
        <SectorsDropdown></SectorsDropdown>
        <NavItem to="/events" text={'Events Calendar'}></NavItem>
        <NavItem to="/about" text={'About Us'}></NavItem>
        <NavItem to="/contact" text={'Contact Us'}></NavItem>
      </HeaderMenuMobileContainer>
    );
  }
}
