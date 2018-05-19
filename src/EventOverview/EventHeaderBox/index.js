import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import Button from 'Button';

const ImageBox = styled(Flex)`
  height: 150px;
  background: ${ props => props.theme.colors.eventOverview.headerBox.background };
  padding: 10px;
  color: white;
`;

const EventTitle = styled.div`
  font-size: 1.5em;
  display: inline-block;
`;

const SubInfo = styled.div`
  display: inline-block;
`;

export default class EventHeaderBox extends Component {
  render () {
    return (
      <ImageBox flexDirection="column">
        <EventTitle>
          7th Annual CERC Forum
        </EventTitle>
        <SubInfo>
          24 - 25 May, 2018
        </SubInfo>
        <SubInfo>
          Leela, New Delhi
        </SubInfo>

        <Flex mt='auto'>
          <Button size='large'>
            Register
          </Button>
        </Flex>
      </ImageBox>
    )
  }
}
