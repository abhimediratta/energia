import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import Event from './Event';

export default class EventsList extends Component {
  render () {
    let { eventsList } = this.props;
    return (
      <Flex width={1} flexDirection='column' mb={20}>
        { eventsList.map(event => <Event key={event.id} event={event}></Event>) }
      </Flex>
    )
  }
}
