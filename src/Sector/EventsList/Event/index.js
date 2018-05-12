import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import Button from 'Button';

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
  flex: 0 0 25%;
  background: grey;
`;

const EventName = styled.span`
  font-weight: 600;
  font-size: 1em;
`;

export default class Event extends Component {
  render () {
    return (
      <EventBox flex='1 1 auto' width={1}>
        <ImageBox flex='0 0 25%'></ImageBox>
        <Flex alignItems='flex-start' p={10} flexDirection='column'>
          <EventName>Test event</EventName>
          <Box mt={20}>20th May - 21st May, 2018</Box>
          <Box mb={20}>Lalit Hotel, New Delhi</Box>
          <Button size='large'>Hola</Button>
        </Flex>
      </EventBox>
    )
  }
}
