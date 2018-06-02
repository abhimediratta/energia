import React, { PureComponent } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tab = styled(Link)`
  background: ${props => props.theme.tabColors.background};
  color: ${props => props.theme.tabColors.color};
  padding: 7px 10px;
  border-right: 1px solid ${props => props.theme.tabColors.borderColor};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.tabColors.color};
    color: ${props => props.theme.tabColors.background};
  }

  &:last-child {
    border: 0;
  }
`;

export default class EventTabs extends PureComponent {
  render () {
    return (
      <Flex>
        <Tab to="overview">Overview</Tab>
        <Tab to="agenda">Agenda</Tab>
        <Tab to="speakers">Speakers</Tab>
      </Flex>
    )
  }
}
