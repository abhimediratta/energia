import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';


const FooterBar = styled(Flex)`
  background: ${props => props.theme.colors.header.background};
  color: ${props => props.theme.colors.header.color};
  height: 200px;
`;

export default class Footer extends Component {
  render () {
    return (
      <FooterBar py={30} px={35} justify='center'>
        <Flex width={[1,1,1,3/4]}>
          Footer
        </Flex>
      </FooterBar>
    )
  }
}
