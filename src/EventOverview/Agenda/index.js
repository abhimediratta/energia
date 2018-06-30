import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import sanitizeHtml from 'sanitize-html';

import EventSectionTitle from '../EventSectionTitle';
import EventSectionContainer from  '../EventSectionContainer';
import EventSectionRight from  '../EventSectionRight';


export default class Agenda extends Component {
  render () {
    let { eventData } = this.props;
    return (
      <Flex mt={20}>
        <Box width={[1,1,1,3/4]}>
          <EventSectionTitle>Agenda</EventSectionTitle>
          <EventSectionContainer dangerouslySetInnerHTML={{ __html: sanitizeHtml(eventData.agenda)}}>
          </EventSectionContainer>
        </Box>
        <EventSectionRight width={[1,1,1,1/4]}>
          Sidebar
        </EventSectionRight>
      </Flex>
    )
  }
}
