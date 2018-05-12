import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import DocumentTitle from 'react-document-title';

import CategoryList from './CategoryList';
import EventsSidebar from './EventsSidebar';


export default class Home extends Component {
  render () {
    return (
      <DocumentTitle title='Energia'>
        <Flex pt={20}>
          <CategoryList></CategoryList>
          <EventsSidebar></EventsSidebar>
        </Flex>
      </DocumentTitle>
    )
  }
}
