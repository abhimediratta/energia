import { Flex } from 'grid-styled';
import styled from 'styled-components';

const EventSectionRight = styled(Flex)`
  flex-direction: column;
  background: ${props => props.theme.eventSectionColors.right.background};
  color: ${props => props.theme.eventSectionColors.right.color};
  padding: 0.8em;
`;


export default EventSectionRight;
