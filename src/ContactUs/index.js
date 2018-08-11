import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const ContactContainer = styled(Flex)`
  margin: 20px auto 0px auto;
  background: ${props => props.theme.colors.contactUs.bg};
  flex-direction: column;
  align-items: center;
  padding: 5px 40px;
`;

const SubHeading = styled.p`
  margin: -0.5em 0.7em 2em 0.7em;
  font-weight: 300;
  font-size: 0.9em;
`;

export default class ContactUs extends Component {
  render () {
    return (
      <DocumentTitle title='Contact Us'>
        <ContactContainer width={[1,1,1,2/5]}>
          <h2>Contact Us</h2>
          <SubHeading>Feel free to contact us for any queries or help</SubHeading>
          <ContactForm />
        </ContactContainer>
      </DocumentTitle>
    )
  }
}
