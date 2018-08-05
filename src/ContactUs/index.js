import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import DocumentTitle from 'react-document-title';

export default class ContactUs extends Component {
  render () {
    return (
      <DocumentTitle title='Contact Us'>
        <Flex>
          Contact Us
        </Flex>
      </DocumentTitle>
    )
  }
}
