import { Flex } from 'grid-styled';
import styled from 'styled-components';

const EventSectionContainer = styled(Flex)`
  flex-direction: column;
  background: ${props => props.theme.eventSectionColors.container.background};
  color: ${props => props.theme.eventSectionColors.container.color};
  padding: 0.8em;
`;


export default EventSectionContainer;
