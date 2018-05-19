import React, { Component } from 'react';
import { Box } from 'grid-styled';

import TitleBar from 'TitleBar';
import EventHeaderBox from './EventHeaderBox';


export default class EventOverview extends Component {
  render () {
    return (
      <Box width={1}>
        <TitleBar titleText={'More on this'}></TitleBar>
        <EventHeaderBox></EventHeaderBox>
      </Box>
    )
  }
}
