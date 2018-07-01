import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

const SpeakerImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1em;
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
          <div>
            {speaker.position}
          </div>
        </Flex>
      </Flex>
    );
  }
}