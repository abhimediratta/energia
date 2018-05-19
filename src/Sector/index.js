import React, { Component } from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

import InlineFlex from 'InlineFlex';
import EventsList from './EventsList';
import EventInsights from './EventsInsights';
import TitleBar from 'TitleBar';

const TitleImage = styled(Box)`
  background: grey;
  height: 200px;
`;

const SubTitle = styled.h3`
  background: blue;
  color: #fff;
  margin: 0;
  padding: 10px;
  background: ${props => props.theme.colors.sector.subTitle.background};
  color: ${props => props.theme.colors.sector.subTitle.color};
`;

export default class Sector extends Component {
  render () {
    return (
      <Box width={1}>
        <TitleBar titleText={'CERC'}>
        </TitleBar>
        <TitleImage width={1}>
        </TitleImage>

        <InlineFlex width={[1,1,1,3/4]} flexDirection='column'>
          <SubTitle>Upcoming Events</SubTitle>

          <EventsList></EventsList>

          <SubTitle>Past Events</SubTitle>

          <EventsList></EventsList>
        </InlineFlex>
        <InlineFlex width={[1,1,1,1/4]} flexDirection='column'>
          <SubTitle>Event Insights</SubTitle>

          <EventInsights></EventInsights>

          <SubTitle>Latest News</SubTitle>

          <EventInsights></EventInsights>
        </InlineFlex>

      </Box>
    )
  }
}
