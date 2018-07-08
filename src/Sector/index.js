import React, { Component } from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InlineFlex from 'InlineFlex';
import EventInsights from './EventsInsights';
import TitleBar from 'TitleBar';
import PastEvents from './PastEvents';
import UpcomingEvents from './UpcomingEvents';
import { fetchCategory } from '../Store/Category/duck/actions';

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

class Sector extends Component {
  constructor(props) {
    super(props);
    this.sectorId = props.match.params.id;
    this.props.getCategory(this.sectorId);
  }

  render () {
    let { category } = this.props;
    return (
      <Box width={1}>
        <TitleBar titleText={category.name}>
        </TitleBar>
        <TitleImage width={1}>
        </TitleImage>

        <InlineFlex width={[1,1,1,3/4]} flexDirection='column'>
          <SubTitle>Upcoming Events</SubTitle>
          <UpcomingEvents sectorId={this.sectorId}></UpcomingEvents>

          <SubTitle>Past Events</SubTitle>
          <PastEvents sectorId={this.sectorId}></PastEvents>
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

const mapStateToProps = state => {
  return {
      category: state.category.category
  }
};

const mapDispatchToProps = dispatch => ({
  getCategory: (sectorId) => {
      dispatch(fetchCategory(sectorId))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Sector);  

