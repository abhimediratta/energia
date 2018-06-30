import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import EventSectionTitle from '../EventSectionTitle';
import EventSectionContainer from  '../EventSectionContainer';
import EventSectionRight from  '../EventSectionRight';

export default class Speakers extends Component {
  render() {
    return (
      <Flex mt={20}>
        <Box width={[1,1,1,3/4]}>
          <EventSectionTitle>Speakers</EventSectionTitle>
          <EventSectionContainer>
          </EventSectionContainer>
        </Box>
        <EventSectionRight width={[1,1,1,1/4]}>
          Sidebar
        </EventSectionRight>
      </Flex>
    );
  }
}