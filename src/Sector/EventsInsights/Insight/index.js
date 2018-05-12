import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImageBox = styled(Flex)`
  flex: 0 0 35%;
  height: 100px;
  background: grey;
`;

const InsightTitle = styled.span`
  font-weight: 600;
  font-size: 1em;
`;

const InsightBox = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`;

const More = styled(Link)`
  font-size: 0.8em;
  font-weight: 300;
  margin-top: 0.5em;
`;

export default class Insight extends Component {
  render () {
    return (
      <InsightBox mb={10}>
        <ImageBox mr={10}></ImageBox>
        <Flex flexDirection='column'>
          <InsightTitle>
            Brochure for REC
          </InsightTitle>
          <More to="/test">Read more</More>
        </Flex>
      </InsightBox>
    )
  }
}
