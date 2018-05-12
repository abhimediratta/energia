import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import Event from './Event';

export default class EventsList extends Component {
  render () {
    return (
      <Flex width={1} flexDirection='column' mb={20}>
        <Event></Event>
        <Event></Event>
      </Flex>
    )
  }
}
