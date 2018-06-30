import React, { PureComponent } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';


const activeClassName = 'active';

const Tab = styled(NavLink).attrs({
  activeClassName
})`
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

  &.${activeClassName} {
    background-color: red;
  }
`;

class EventTabs extends PureComponent {
  render () {
    let { eventSlug } = this.props;
    return (
      <Flex>
        <Tab to={`/event/${eventSlug}/overview`}>Overview</Tab>
        <Tab to={`/event/${eventSlug}/agenda`}>Agenda</Tab>
        <Tab to={`/event/${eventSlug}/speakers`}>Speakers</Tab>
      </Flex>
    )
  }
}

export default withRouter(EventTabs);
