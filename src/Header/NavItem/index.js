import React, { Component } from 'react';
import styled from 'styled-components';

const NavLink = styled.a`
  margin-left: 20px;
`;

export default class NavItem extends Component {
  render () {
    return (
      <NavLink>{this.props.text}</NavLink>
    );
  }
}
