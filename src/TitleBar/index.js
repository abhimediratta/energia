import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0;
  background: ${props => props.theme.colors.sector.titleBar.background};
  color: ${props => props.theme.colors.sector.titleBar.color};
`;

export default class TitleBar extends Component {
  render () {
    var { titleText } = this.props;
    return (
      <Title>
        {titleText}
      </Title>
    )
  }
}
