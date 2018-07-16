import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'Button';
import { formatDateRange } from 'Utilities/DateUtility';

const EventBox = styled(Flex)`
  &:nth-child(even) {
    background: ${props => props.theme.colors.eventsList.event.even.background};
    color: ${props => props.theme.colors.eventsList.event.even.color};

    &:hover {
      background: ${props => props.theme.colors.eventsList.event.even.hoverBg};
    }
  }

  &:nth-child(odd) {
    background: ${props => props.theme.colors.eventsList.event.odd.background};
    color: ${props => props.theme.colors.eventsList.event.odd.color};
    &:hover {
      background: ${props => props.theme.colors.eventsList.event.odd.hoverBg};
    }
  }
`;

const ImageBox = styled(Box)`
  flex: 0 0 150px;
  background: grey;
`;

const EventName = styled.span`
  font-weight: 600;
  font-size: 1em;
`;

export default class Event extends Component {
  render () {
    var { event } = this.props;
    return (
      <EventBox flex='1 1 auto' width={1}>
        <ImageBox flex='0 0 25%'></ImageBox>
        <Flex alignItems='flex-start' p={10} flexDirection='column'>
          <EventName>{event.name}</EventName>
          <Box mt={20}>{formatDateRange(event.startDate, event.endDate)}</Box>
          <Box mb={20}>{event.venue}</Box>
          <Link to={`/event/${event.slug}/overview`}>
            <Button size='large'>
              More Details
            </Button>
          </Link>
        </Flex>
      </EventBox>
    )
  }

  
}
