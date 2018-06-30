import React, { Component } from 'react';
import { Box } from 'grid-styled';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import TitleBar from 'TitleBar';
import EventHeaderBox from './EventHeaderBox';
import EventTabs from './EventTabs';
import Overview from './Overview';
import { fetchEventData } from '../Store/Event/duck/actions';


class EventOverview extends Component {
  componentDidMount() {
    let { eventSlug } = this.props.match.params;
    this.props.getEventData(eventSlug);
  }

  render () {
    let { match, eventData } = this.props;
    return (
      <Box width={1}>
        <TitleBar titleText={'More on this'}></TitleBar>
        <EventHeaderBox eventData={eventData}></EventHeaderBox>
        <EventTabs eventSlug={eventData.slug}></EventTabs>
        <Box>
          <Route path={`${match.url}/overview`} component={Overview}/>
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    eventData: state.event.eventData
  }
};

const mapDispatchToProps = dispatch => ({
  getEventData: (eventSlug) => {
    dispatch(fetchEventData(eventSlug))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventOverview);  
