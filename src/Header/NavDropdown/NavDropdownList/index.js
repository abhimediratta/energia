import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { Link } from 'react-router-dom';

const ListItem = styled(Link)`
  text-decoration: none;
  padding: 10px 0;
  color: #eee;
  &:hover {
    color: #fff;
    font-weight: bold;
  }
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

export default class NavDropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render () {
    const { list } = this.props;
    return (
      <Flex flexDirection='column'>
        { list.map(item => <ListItem to={'/sector/' + item.id + '-' + item.slug}>{item.name}</ListItem>) }
      </Flex>
    );
  }
}
