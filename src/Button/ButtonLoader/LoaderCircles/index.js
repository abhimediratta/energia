import React from 'react';
import { Box } from "grid-styled";
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
from { 
  transform: translate3d(0, 0, 0);     
}
to { 
  transform: translate3d(0, -10px, 0); 
}
`;

const BouncingCircleContainer = styled(Box)`
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -16px;
`;

const BouncingCircle = styled.span`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: red;
  animation: ${BounceAnimation} 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  display: inline-block;
`;

const BouncingCircleTwo = styled(BouncingCircle)`
  animation-delay: 0.2s;
  margin-left: 5px;
`;

const BouncingCircleThree = styled(BouncingCircle)`
  animation-delay: 0.4s;
  margin-left: 5px;
`;

const LoaderCircles = () => (
  <BouncingCircleContainer>
    <BouncingCircle/>
    <BouncingCircleTwo/>
    <BouncingCircleThree/>
  </BouncingCircleContainer>
);

export default LoaderCircles;