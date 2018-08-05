import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import sanitizeHtml from 'sanitize-html';

import EventSectionTitle from '../EventSectionTitle';
import EventSectionContainer from  '../EventSectionContainer';
import EventSectionRight from  '../EventSectionRight';


export default class Overview extends Component {
  render () {
    let { eventData } = this.props;
    return (
      <Flex flexDirection={['column', 'row']}>
        <Box width={[1,1,1,3/4]}>
          <EventSectionTitle>Overview</EventSectionTitle>
          <EventSectionContainer dangerouslySetInnerHTML={{ __html: sanitizeHtml(eventData.overview)}}>
          </EventSectionContainer>
        </Box>
        <EventSectionRight width={[1,1,1,1/4]}>
          Sidebar
        </EventSectionRight>
      </Flex>
    )
  }
}
