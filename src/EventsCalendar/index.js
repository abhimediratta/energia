import React, { Component } from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';

import TitleBar from 'TitleBar';
import AllUpcomingEvents from './AllUpcomingEvents';

const TitleImage = styled(Box)`
  background: grey;
  height: 200px;
`;


export default class EventsCalendar extends Component {
  render () {
    return (
      <DocumentTitle title='Events Calendar'>
        <Box width={1}>
          <TitleImage/>
          <TitleBar titleText="Upcoming Events">
          </TitleBar>

          <AllUpcomingEvents />
        </Box>
      </DocumentTitle>
    )
  }
}