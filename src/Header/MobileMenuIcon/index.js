import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled.div`
  padding: 10px 0;
  margin-left: auto;

  @media screen and (min-width: 40em) {
    display: none;    
  }
`;

export default class MobileMenuIcon extends Component {
  render () {
    return (
      <Icon>
        <FontAwesomeIcon icon="bars"/>
      </Icon>
    );
  }
}
