import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const SpeakerImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1em;
`;

const SpeakerPosition = styled(Box)`
  width: 80px;
  height: 80px;
  margin: 0.4em 1em 0 0;
  font-size: 0.8em;
`;

export default class SpeakerData extends Component {
  render() {
    let { speaker } = this.props;
    return (
      <Flex>
        <SpeakerImage src={speaker.photo.url}>
        </SpeakerImage>
        
        <Flex flexDirection="column">
          <div>
            {speaker.name}
          </div>
          <SpeakerPosition>
            {speaker.position}
          </SpeakerPosition>
        </Flex>
      </Flex>
    );
  }
}