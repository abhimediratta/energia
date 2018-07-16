import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  margin-left: 20px;
  cursor: pointer;
  padding: ${ props => props.theme.colors.header.navItem.padding };
  text-decoration: none;
  color: inherit;
  &:hover {
    background: ${ props => props.theme.colors.header.navItem.hoverColor }
  }
  &:visited {
    text-decoration: none;
  }
`;

export default class NavItem extends Component {
  render () {
    var { to } = this.props;
    return (
      <NavLink to={to}>{this.props.text}</NavLink>
    );
  }
}
