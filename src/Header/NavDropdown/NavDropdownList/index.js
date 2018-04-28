import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const ListItem = styled.a`
  padding: 10px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

export default class NavDropdownList extends Component {
  render () {
    return (
      <Flex flexDirection='column'>
        <ListItem>Test</ListItem>
        <ListItem>Test</ListItem>
        <ListItem>Test</ListItem>
      </Flex>
    );
  }
}
