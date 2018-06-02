import React, { Component } from 'react';
import { Box } from 'grid-styled';
import { Route } from "react-router-dom";

import TitleBar from 'TitleBar';
import EventHeaderBox from './EventHeaderBox';
import EventTabs from './EventTabs';
import Overview from './Overview';


export default class EventOverview extends Component {
  render () {
    let { match } = this.props;
    return (
      <Box width={1}>
        <TitleBar titleText={'More on this'}></TitleBar>
        <EventHeaderBox></EventHeaderBox>
        <EventTabs></EventTabs>
        <Box>
          <Route path={`${match.url}/overview`} component={Overview}/>
        </Box>

      </Box>
    )
  }
}
