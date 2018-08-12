import React from 'react';
import styled from 'styled-components';

import Button from '..';
import LoaderCircles from './LoaderCircles';

const ButtonContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
`;

const ButtonText = styled.span`
  display: inline-block;
  color: red;
  transition: all 0.7s;

  &.hide {
    transform: translateY(-30px);
    visibility: hidden;
  }
`;

const ButtonLoader = ({children, showLoader, disabled}) => {

  let loader = '';

  if (showLoader) {
    loader = <LoaderCircles/>;
  }

  return (
    <ButtonContainer>
      <Button disabled={disabled || showLoader}>
        <ButtonText className={showLoader ? 'hide' : ''}>
          {children}
        </ButtonText>
        {loader}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonLoader;