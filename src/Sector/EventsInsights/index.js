import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import Insight from './Insight';

const InsightsBox = styled(Flex)`
  background: ${props => props.theme.colors.insights.background};
  margin-bottom: 20px;
`;

export default class EventInsights extends Component {
  render () {
    return (
      <InsightsBox flexDirection='column'>
        <Insight></Insight>
        <Insight></Insight>
      </InsightsBox>
    );
  }
}
