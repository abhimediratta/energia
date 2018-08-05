import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';


const SideBox = styled(Flex)`
  background: ${props => props.theme.colors.eventsSidebar.background};
  color: ${props => props.theme.colors.eventsSidebar.color};
`;

const EventsText = styled.span`
  font-size: 0.9em;
`;

const EventsTitle = styled.h1`
  margin-top: 0;
`;

export default class EventsSidebar extends Component {
  render () {
    return (
      <SideBox p={['15px', '20px']} flex={['1', '0 1 25%']}>
        <Flex pt={['5px', 20]} flexDirection='column'>
          <EventsTitle>Events that matter</EventsTitle>
          <EventsText>Sed ut velit sed nunc sollicitudin posuere. Proin scelerisque sed velit vel finibus. Mauris egestas est quis rhoncus congue. Donec in semper mauris. Fusce laoreet risus in velit sodales, quis sollicitudin justo volutpat. Curabitur mattis nulla ut lectus fermentum cursus. Cras imperdiet efficitur tempor.</EventsText>
        </Flex>
      </SideBox>
    )
  }
}
