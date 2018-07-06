import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import EventSectionTitle from '../EventSectionTitle';
import EventSectionContainer from  '../EventSectionContainer';
import EventSectionRight from  '../EventSectionRight';
import styled from 'styled-components';
import SpeakerData from './SpeakerData';

const SpeakersBox = styled.div`
  display: grid;
  columns: 2;
  grid-template-columns: repeat(2, 1fr);
`;

export default class Speakers extends Component {
  render() {
    let { eventData } = this.props;
    return (
      <Flex mt={20}>
        <Box width={[1,1,1,3/4]}>
          <EventSectionTitle>Speakers</EventSectionTitle>
          <EventSectionContainer>
            <SpeakersBox>
              { eventData.speakers && eventData.speakers.map(speaker => <SpeakerData speaker={speaker} />) }
            </SpeakersBox>
          </EventSectionContainer>
        </Box>
        <EventSectionRight width={[1,1,1,1/4]}>
          Sidebar
        </EventSectionRight>
      </Flex>
    );
  }
}