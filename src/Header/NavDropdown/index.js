import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import NavDropdownList from './NavDropdownList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavPanel = styled(Flex)`
  display: none;
  background: #000;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  z-index: 2;
`;

const Dropdown = styled(Box)`
  position: relative;

  &:hover ${NavPanel} {
    display: block;
  }
`;

const NavText = styled(Flex)`
  cursor: pointer;
  padding: ${ props => props.theme.colors.header.navItem.padding };
  &:hover {
    background: ${ props => props.theme.colors.header.navItem.hoverColor }
  }
`;

const TextSpan = styled.span`
  margin-left: 10px;
  margin-right: 5px;
`;


export default class NavDropdown extends Component {
  render () {
    const { list } = this.props;
    return (
      <Dropdown>
        <NavText alignItems='center'>
          <FontAwesomeIcon icon="columns"/>
          <TextSpan>{this.props.text}</TextSpan>
          <FontAwesomeIcon icon="angle-down"/>
        </NavText>
        <NavPanel>
          <NavDropdownList list={list}>

          </NavDropdownList>
        </NavPanel>

      </Dropdown>
    );
  }
}
