import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

const AboutHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export default class AboutUs extends Component {
  render () {
    return (
      <DocumentTitle title='About Energia'>
        <Flex py={[10, 20, 10, 40]}>
          <AboutHeader>
            About Us
          </AboutHeader>
        </Flex>
      </DocumentTitle>
    )
  }
}
