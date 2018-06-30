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
    let { eventData } = this.props;
    return (
      <ImageBox flexDirection="column">
        <EventTitle>
          { eventData.name }
        </EventTitle>
        <SubInfo>
          { eventData.formattedEventDate }
        </SubInfo>
        <SubInfo>
        { eventData.venue }
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
