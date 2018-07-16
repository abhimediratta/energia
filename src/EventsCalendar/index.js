import React, { Component } from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import TitleBar from 'TitleBar';
import AllUpcomingEvents from './AllUpcomingEvents';

const TitleImage = styled(Box)`
  background: grey;
  height: 200px;
`;


export default class EventsCalendar extends Component {
  render () {
    return (
      <Box width={1}>
        <TitleImage/>
        <TitleBar titleText="Upcoming Events">
        </TitleBar>

        <AllUpcomingEvents />
      </Box>
    )
  }
}