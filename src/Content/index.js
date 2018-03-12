import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import CategoryList from './CategoryList';

const ContentBox = styled(Flex)`
  background: ${props => props.theme.colors.content.background};
  color: ${props => props.theme.colors.content.color};
`;

export default class Content extends Component {
  render () {
    return (
      <ContentBox>
        <Box width={1/4}></Box>
        <Flex width={3/4}>
          <CategoryList></CategoryList>
        </Flex>
      </ContentBox>
    )
  }
}
