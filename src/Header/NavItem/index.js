import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  cursor: pointer;
  padding: ${ props => props.theme.colors.header.navItem.mobile.padding };
  text-decoration: none;
  color: inherit;
  &:hover {
    background: ${ props => props.theme.colors.header.navItem.hoverColor }
  }
  &:visited {
    text-decoration: none;
  }
  @media screen and (min-width: 40em) {
    margin-left: 20px;
    padding: ${ props => props.theme.colors.header.navItem.padding };
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
