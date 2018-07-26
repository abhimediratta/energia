import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import NavItem from '../NavItem';
import SectorsDropdown from '../SectorsDropdown';

const HeaderMenuContainer = styled(Flex)`
  display: none;
  @media screen and (min-width: 40em) {
    display: flex;
    flex-direction: row;
  }
`;

export default class HeaderMenu extends Component {
  render () {
    return (
      <HeaderMenuContainer flexWrap="wrap" alignItems='center' ml={[0, 40, 40, 40]}>
        <SectorsDropdown></SectorsDropdown>
        <NavItem to="/events" text={'Events Calendar'}></NavItem>
        <NavItem to="/about" text={'About Us'}></NavItem>
        <NavItem to="/contact" text={'Contact Us'}></NavItem>
      </HeaderMenuContainer>
    );
  }
}
