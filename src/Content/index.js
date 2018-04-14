import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

import CategoryList from './CategoryList';

const ContentBox = styled(Flex)`
  background: ${props => props.theme.colors.content.background};
  color: ${props => props.theme.colors.content.color};
  padding: 20px
`;

export default class Content extends Component {
  render () {
    return (
      <ContentBox justify='center'>
        <Flex width={[1, 1, 1, 3/4]}>
          <CategoryList></CategoryList>
        </Flex>
      </ContentBox>
    )
  }
}
