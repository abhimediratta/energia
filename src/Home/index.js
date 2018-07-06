import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import DocumentTitle from 'react-document-title';

import EventsSidebar from './EventsSidebar';
import CategoryItems from './CategoryItems';


export default class Home extends Component {
  render () {
    return (
      <DocumentTitle title='Energia'>
        <Flex pt={20}>
          <CategoryItems></CategoryItems>
          <EventsSidebar></EventsSidebar>
        </Flex>
      </DocumentTitle>
    )
  }
}
